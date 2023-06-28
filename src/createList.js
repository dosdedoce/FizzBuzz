import {fizzBuzz} from './fizzBuzz.js';


const createList=()=>{
    const container=document.getElementById('container');
    let ul=document.createElement('ul');
    let title;
    for(let i=1;i<101;i++){
        let li=document.createElement('li');
        li.textContent=fizzBuzz(i);
            if(fizzBuzz(i)==="FizzBuzz"){
                title="FizzBuzz";
            }
            else if(fizzBuzz(i)==="Fizz"){
                title="Fizz";
            }
            else if(fizzBuzz(i)==="Buzz"){
                title="Buzz";
            } else {
                title='numero';
            }
        li.setAttribute('title',title);
        ul.appendChild(li);
    }
    container.appendChild(ul);
}
createList();