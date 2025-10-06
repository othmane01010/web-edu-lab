let plus=document.getElementById("btn3");
let minus=document.getElementById("btn1");
let reset=document.getElementById("btn2");
let counter=document.querySelector(".counter");

let a=0;

plus.addEventListener("click",function(){
    if(a==99) a=0;
    counter.textContent=++a;
});

minus.addEventListener("click",function(){
    if(a==-99) a=0;
    counter.textContent=--a;
});

reset.addEventListener("click",function(){
    a=0;
    counter.textContent=a;
});
