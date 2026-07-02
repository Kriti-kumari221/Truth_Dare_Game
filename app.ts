interface Questions{
    truth:string[];
    dare:string[];
}
let truthbtn=document.getElementById('truthBtn') as HTMLButtonElement 
let darebtn=document.getElementById('dareBtn') as HTMLButtonElement
let randombtn=document.getElementById('randomBtn') as HTMLButtonElement
let question_field=document.getElementById('question') as HTMLDivElement
let timerField= document.getElementById("timer") as HTMLDivElement;
type Mode="truth"|"dare";

let question:Questions;
async function load():Promise<void>{
        const response=await fetch("questions.json");
        question= await response.json();
}
function random(arr:string[])
{
   let randomidx=Math.floor(Math.random()*arr.length);
   return arr[randomidx];
}
function show(mode:Mode){
    if(mode==="truth"){
question_field.innerHTML=
`<h3>Truth</h3>
<p>${random(question.truth)}</p>`      
    }
    if(mode==="dare"){
        question_field.innerHTML=`<h3>Dare</h3>
<p>${random(question.dare)}</p>`
    }
    startTimer(30);  
}
let interval:number;
function startTimer(seconds:number){
    truthbtn.disabled=true;
    darebtn.disabled=true;
    randombtn.disabled=true;
    timerField.innerHTML=`Time Left: ${seconds}`;
    interval=window.setInterval(()=>{
        seconds--;
        timerField.innerHTML=`Time Left: ${seconds}`;
        if(seconds<=0){
            clearInterval(interval);
            timerField.innerHTML=`Time's Up!`;
            truthbtn.disabled=false;
            darebtn.disabled=false;
            randombtn.disabled=false;
        }
    },1000);
}
truthbtn.addEventListener("click",()=>{
    show("truth")
});

darebtn.addEventListener("click",()=>{
    show("dare")
});
randombtn.addEventListener("click",()=>{
   let user_random:Mode= Math.random()>0.5?"truth":"dare";
    show(user_random);
});
load() 