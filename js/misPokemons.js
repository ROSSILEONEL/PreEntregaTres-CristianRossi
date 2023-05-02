// const mp = localStorage.getItem('mis-pokemones');
// let misPokemon=JSON.parse(mp)    
let misPokemon = JSON.parse(localStorage.getItem('mis-pokemones')) || [];
console.log(misPokemon);
console.log(typeof(misPokemon));
const divPrincipal= document.querySelector('.div-mis-pokemon');
let pokeKill=[];

function cargarMP(misPokemon) {
  divPrincipal.innerHTML=""
  misPokemon.forEach(element => {
    divPrincipal.innerHTML+=`
    <div class="  div-pokemon" style="">
    <div class="div-foto">
    <img class="div-img-mp" src="${element.imagen}">
    </div>
     <div class="div-info-mis">
      <h5 class="card--title">${element.nombre}</h5>
     </div>
     <div class="div-boton-eliminar">
     <a id="${element.nombre}"class="btn  btn-primary boton-eliminar"> ELIMINAR </a>
     </div>
     </div>`
     agregarBotonEliminar();
     
    });
}



if(misPokemon==null){ divPrincipal.innerHTML+=`<div>
<h5 class="mensaje-mp">
          NO TIENES POKEMONES AGREGADOS</h5>
          <span class="span-link"> Para agregar hace</span>
          <a class="mensaje-link" href="../pages/main.html"> click aqui</a>
          </div>`}
          cargarMP(misPokemon);
          checkear();
          function agregarBotonEliminar(){
        const botones= document.querySelectorAll(".boton-eliminar")
        botones.forEach(boton=>boton.addEventListener('click',eliminarPokemon))
        }
    
        function eliminarPokemon(e) {
            const id = e.currentTarget.id;
             pokeKill=misPokemon.filter(item=>item.nombre!=id);
           console.log(pokeKill);
        misPokemon=pokeKill;
        Actualizar(pokeKill)
        cargarMP(misPokemon)
        }

        function Actualizar(list) {
            misPokemon=list;
            divPrincipal.innerHTML="";
            localStorage.setItem('mis-pokemones', JSON.stringify(misPokemon))
            cargarMP(misPokemon)
        }
    
function checkear() {
  if (misPokemon=="") {
    console.log("NO TENES POKEMONES");
    divPrincipal.innerHTML +=`<h3 class="mensaje-mp">NO TIENES POKEMONES</h3><span class="span-link">Hacer <a class=" mensaje-link" href="./main.html">Click Aqui</a> para buscar </span> `
  }
}