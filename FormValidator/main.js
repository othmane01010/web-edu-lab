let signUp=document.getElementById("signUp");

let username=document.getElementById("username");
let tel=document.getElementById("tel");
let email=document.getElementById("email");
let password=document.getElementById("password");
let rePassword=document.getElementById("rePassword");
let submit=document.getElementById("submit");

let msg=document.getElementsByClassName("msg");


function validateName(name){
    if(name.length <3 || name.length>20)
         return false;
    const regex=/^[\p{L} ]+$/u;
    return regex.test(name);
}

function validatePhone(ph){
    const regex=/^\d{10}$/;
    return regex.test(ph);
}


function validateEmail(email){
    return validator.isEmail(email);
}

function validateRePassword(pass1,pass2){
  return pass1==pass2;
}


username.addEventListener("input",function(){
   msg[0].textContent="";
   if(validateName(username.value.trim()) == false){
      msg[0].textContent="Name must be at least 3 characters and contain only letters.";
   }
});

tel.addEventListener("input",function(){
   msg[1].textContent="";
   if(!validatePhone(tel.value.trim())){
      msg[1].textContent="Please enter a valid phone number (digits only, at least 10 characters).";
   }
});

email.addEventListener("input",function(){
    msg[2].textContent="";
    if(!validateEmail(email.value.trim())){
        msg[2].textContent="Please enter a valid email address.";
    }
});

let msgp=document.getElementById("msgP");
password.addEventListener("input",function(){
   msgp.textContent="";
   const r = zxcvbn(password.value.trim()).score;  
   if(r === 0){
     msgp.textContent="Very Weak";
     msgp.style.color="#ff4d4d";
   }else if(r === 1){
     msgp.textContent="Weak";
     msgp.style.color="#ff944d";
   }else if(r === 2){
    msgp.textContent="Medium";
    msgp.style.color="#ffdb4d";
   }else if(r === 3){
    msgp.textContent="Strong";
    msgp.style.color="#319151ff";
   }else if (r === 4){
    msgp.textContent="Excellent";
    msgp.style.color="#04c565ff";
}
});

rePassword.addEventListener("input",function(){
    msg[3].textContent="";
    if(!validateRePassword(password.value.trim(),rePassword.value.trim()))
        msg[3].textContent="Passwords do not match.";
});

submit.addEventListener("click",function(e){
    e.preventDefault();
    let valid=true;
    if(!validateName(username.value.trim())){
        msg[0].textContent="Name must be at least 3 characters and contain only letters.";
        valid=false;
    }
    if(!validatePhone(tel.value.trim())){
        msg[1].textContent="Please enter a valid phone number (digits only, at least 10 characters).";
        valid=false;
    }
    if(!validateEmail(email.value.trim())){
        msg[2].textContent="Please enter a valid email address.";
        valid=false;
    }
    const r=zxcvbn(password.value.trim()).score;
    if(r<2){
        msgp.textContent="Password is too weak.";
        msgp.style.color="#ff4d4d";
        valid=false;
    }
    if(!validateRePassword(password.value.trim(), rePassword.value.trim())){
        msg[3].textContent="Passwords do not match.";
        valid=false;
    }
    if(valid){
        alert("Form submitted successfully!");
    }
});