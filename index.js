const formLogin = document.querySelector('.form-login')

const userLs=localStorage.getItem('username')
const passLs=localStorage.getItem('password')
console.log(userLs);
console.log(passLs);
const hone=document.getElementById("h1-login")
hone.innerText="HOLA QUE TAL";
formLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    const userInput=document.getElementById('username').value;
    const passInput=document.getElementById('password').value;
if(userInput==userLs && passLs==passInput){hone.innerText="COINCIDE";
window.location.href="/pages/mypokemons.html"}
console.log(userInput);
console.log(passInput);
})
