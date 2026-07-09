const loginBtn =
document.getElementById(
"loginBtn"
);

loginBtn.addEventListener(
"click",
()=>{

const password =
document.getElementById(
"adminPassword"
).value;

if(password === "alhuda2025"){

localStorage.setItem(
"adminLoggedIn",
"true"
);

window.location.href =
"admin.html";

}else{

document.getElementById(
"loginError"
).innerText =
"Wrong Password";

}

});