
//  -----FORMULARIO DE REGISTRO
const formRegistrer=document.querySelector('.form-registrer');
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };


formRegistrer.addEventListener('submit',(e)=>{
  e.preventDefault();
  const userName=document.getElementById('username').value;
  const passWord=document.getElementById('password').value;
  const confirmPass=document.getElementById('confirm-password').value;
  const users = JSON.parse(localStorage.getItem('users')) || [];
  let check=false;

  users.forEach(element => {
    element.userName===userName?check=true:"";
  }  );

  if (passWord != confirmPass ) {
    Swal.fire(
      'Error',
      'Las contraseñas no coinciden',
      'error'
    )
  }else if (check!=true) {
    users.push({ userName, passWord });
    localStorage.setItem('users', JSON.stringify(users));
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
                              }
                                })
          Toast.fire({
            icon: 'success',
            title: ' Registro exitoso'
          })
    formRegistrer.reset();
  }else{
    Swal.fire(
      'Error',
      'El usuario ya se encuentra registrado',
      'warning'
    )
  }
});
   
  

    

  
  
