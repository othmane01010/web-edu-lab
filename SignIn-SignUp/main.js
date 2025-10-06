let signIn = document.getElementById("signIn");
let signUp = document.getElementById("signUp");
let sendSignIn=document.getElementById("submitSignIn");
let sendSignUp=document.getElementById("submitSignUp");
let toSignIn = document.getElementById("toSignIn");
let toSignUp = document.getElementById("toSignUp");


signUp.classList.add("visible");
signIn.classList.add("hidden");

function showForm(formShow,formHide){
    formHide.classList.remove("visible");
    formHide.classList.add("hidden");
    formShow.classList.remove("hidden");
    formShow.classList.add("visible");
}

toSignIn.addEventListener("click",function(){
    showForm(signIn,signUp);
});

toSignUp.addEventListener("click",function(){
   showForm(signUp,signIn);
});

sendSignUp.addEventListener("click",function(e){
    e.preventDefault();
    let password=document.getElementById("password");
    let rePassword=document.getElementById("rePassword");
    let msg=document.getElementById("msg");
    
    password.classList.remove("inputError");
    rePassword.classList.remove("inputError");
    msg.textContent="";
    
    if(password.value !== rePassword.value){
        password.classList.add("inputError");
        rePassword.classList.add("inputError");
        msg.textContent="Passwords do not match!";
        return;
    }
    
    if(password.value.length<6){
        password.classList.add("inputError");
        rePassword.classList.add("inputError");
        msg.textContent="Password must be at least 6 characters long!";
        return;
    }
});
