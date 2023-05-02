
const boton = document.querySelector('#boton-login')

const user= localStorage.getItem('users')
let users=JSON.parse(user)
console.log(users)
let userInput=document.getElementById('username').value;
let passInput=document.getElementById('password').value;

boton.addEventListener('click',(e)=>{


    e.preventDefault();
    userInput=document.getElementById('username').value;
    passInput=document.getElementById('password').value;
    console.log("SE EJECUTO","pass :" ,passInput);
 


    users.forEach(u => {
       
    
        let x=u.userName;
        let xx=u.passWord;
    
        if(x===userInput && xx===passInput){
            window.location.href="/pages/mypokemons.html";
            console.log("SE PUEDE LOGEAR");
        }else{
            console.log("no se puede logear");
        }
    })
})






