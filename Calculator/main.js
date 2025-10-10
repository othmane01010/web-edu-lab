
//Get all calculator buttons
const btn=document.querySelectorAll('.btn');

//Get input and output display elements
let input=document.getElementById('inputDisplay');
let output=document.getElementById('resultDisplay');


//Simple calculator function (supports +, -, *, /, %)
function simpleCalc(exp){
     const ops=["+","-","*","/","%"];
     if(!exp)return 0;

     //Split expression into tokens(numbers and operators)
     let tokens=exp.match(/(\d+\.?\d*|\+|\-|\*|\/|%|\(|\))/g);
     if(!tokens)throw new Error("Syntax Error!");

     //Check for repeated operators or expression starting/ending with an operator
     if(ops.includes(tokens[0])||ops.includes(tokens[tokens.length-1]))
        throw new Error("Syntax Error!");

     for(let i=1;i<tokens.length;i++){
        if(ops.includes(tokens[i])&&ops.includes(tokens[i-1]))
            throw new Error("Syntax Error!");
    }
     //Convert percentage to number
     for(let i=0;i<tokens.length;i++){
        if(tokens[i]==="%"){
            if(i===0) throw new Error("Syntax Error!");
            tokens[i]=(parseFloat(tokens[i-1])/100).toString();
        }
     }

     //Multiplication and division
     for(let i=0;i<tokens.length;i++){
        if(tokens[i]==="*"||tokens[i]==="/"){
           let a=parseFloat(tokens[i-1]);
           let b=parseFloat(tokens[i+1]);
           if(tokens[i]=== "/" && b==0)
             throw new Error("cannot divide by zero!!"); 
           let temp=tokens[i]==="*" ? a*b : a/b;
           tokens.splice(i-1,3,temp.toString());//Replace operation with result
           i--;//Step back to recheck array after splice
        }
     }
     //Addition and subtraction
     for(let i=0;i<tokens.length;i++){
        if(tokens[i]==="+"||tokens[i]==="-"){
          let a=parseFloat(tokens[i-1]);
          let b=parseFloat(tokens[i+1]);
          let temp=tokens[i]==="+"?a+b:a-b;
          tokens.splice(i-1,3,temp.toString());
          i--;
        }
     }
     return parseFloat(tokens[0]);
}




//Add click event listener to each button
btn.forEach((elm)=>{
   elm.addEventListener('click',function(){
      if(elm.textContent !== "C" && elm.textContent !== "⌫" && elm.textContent !== "=")
       input.value+=elm.textContent;
      else if(elm.textContent === "C"){input.value=""; output.value="0"}
      else if(elm.textContent === "⌫") input.value=input.value.slice(0,-1);
      else if(elm.textContent == "="){
         try{output.value=simpleCalc(input.value);}
         catch(error){output.value=error.message;}
      }
      
   });
}
);

