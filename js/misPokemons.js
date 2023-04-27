const mp = localStorage.getItem('mis-pokemones');
let misPokemon=JSON.parse(mp)    
console.log(misPokemon);
let pokeKill=[];
const divPrincipal= document.querySelector('.div-mis-pokemon');


function cargarMP(misPokemon) {
    
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
    cargarMP(misPokemon);
    function agregarBotonEliminar(){
        const botones= document.querySelectorAll(".boton-eliminar")
        botones.forEach(boton=>boton.addEventListener('click',eliminarPokemon))
        }
    
        function eliminarPokemon(e) {
            const id = e.currentTarget.id;
             pokeKill=misPokemon.filter(item=>item.nombre!=id);
           console.log(pokeKill);
        // misPokemon=pokeKill;
        Actualizar(pokeKill)
        // cargarMP(misPokemon)
        }

        function Actualizar(list) {
            misPokemon=list;
            divPrincipal.innerHTML="";
            localStorage.setItem('mis-pokemones', JSON.stringify(misPokemon))
            cargarMP(misPokemon)
        }
    
