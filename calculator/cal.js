
// JavaScript Code

let string='';
let input=document.querySelector('#inpEmt');
let button=document.querySelectorAll('.btn');
Array.from(button).forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        if(event.target.innerText=='='){
            string=eval(string);
            input.value=string;
        }
        else if(event.target.innerText=='AC'){

            string='';
            input.value=string;
        }
        else if(event.target.innerText=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=event.target.innerText;
            input.value=string;
        }
    })
})