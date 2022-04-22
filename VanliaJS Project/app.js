const loginForm = document.querySelector("#login-form"); 
const loginInput = loginForm.querySelector("input");
const greeting  = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);

    greetings(username);    
}

function greetings(name){
    greeting.innerText=`Hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if(saveUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLogSubmit);
}else{
    greetings(saveUserName);
}