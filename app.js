let input=document.getElementById("input");

let buttons=Array.from(document.getElementsByClassName("button"));
// console.log(buttons);

buttons.map(button=>{
    button.addEventListener('click',(e)=>{
     switch(e.target.innerText){
        case 'C':
            input.innerText=' ';
            break;
        case 'X':
            input.innerText=input.innerText.slice(0,-1);
            break;
        case '=':
            try{
            input.innerText=eval(input.innerText);
            }catch{
                input.innerText="Error!";
            }
            break;
                     
        default:
            input.innerText+=e.target.innerText;
     }
    })
})

  