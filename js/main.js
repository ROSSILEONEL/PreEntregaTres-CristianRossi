
  let listaPokemons=[];
  fetch('../pokemons.json')
        .then((pokemon)=>pokemon.json())
        .then((pokemon)=>{listaPokemons=pokemon;
                    cargarPokemons(listaPokemons)
                          })
        .catch((err)=>alert(err))

    
    function cargarPokemons(listaPokemons) {
    for (const poke of listaPokemons) {
      const divPrincipal = document.getElementById('contenedor-principal');
      const div=document.createElement("div")
      div.classList.add('pokemon')
      div.innerHTML+=`
      
        <div class="card" style="">
        <img src="${poke.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${poke.nombre}</h5>
        <p class="card-text">${poke.descripcion}</p>
        <a id=${poke.nombre} class="btn btn-primary boton-capturar">CAPTURAR</a>
        </div>
        </div>
        `
        divPrincipal.append(div)
      }
      agregarBotones();
    } 

    function agregarBotones(){
    const botones= document.querySelectorAll(".boton-capturar")
    botones.forEach(boton=>boton.addEventListener('click',capturarPokemon))
    }

let pokemonesCapturados=JSON.parse(localStorage.getItem('mis-pokemones'));
const misPokemon = JSON.parse(localStorage.getItem('mis-pokemones')) || [];
let check={};
    
function capturarPokemon(e) {
        const id = e.currentTarget.id;
        let pAdd=[];
        let pokeAdd=listaPokemons.find(item=>item.nombre===id);
        pAdd.push(pokeAdd)
       console.log("ID ",id);
       console.log("pokeAdd ",pokeAdd);

    const confirmar=()=>Swal.fire({
        title: '¿Está seguro?',
        
        imageUrl:`https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/902px-Pokebola-pokeball-png-0.png`,
        imageWidth:'65px',
        text: `¿Desea capturar a ${id}?` ,
        // icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
    });

     confirmar().then((resultado) => {
        if (resultado.isConfirmed) {
        
            // console.log(pokeAdd);
            // localStorage.setItem('mis-pokemones', JSON.stringify(pokeAdd))
          
   
            console.log(typeof(pokemonesCapturados));

            //  aca debo corregir-------------------------------
            //  aca debo corregir-------------------------------
            //  aca debo corregir-------------------------------
            //  aca debo corregir-------------------------------
            //  aca debo corregir-------------------------------
            //  aca debo corregir-------------------------------
            // pokemonesCapturados=JSON.parse(localStorage.getItem('mis-pokemones'));
            pokemonesCapturados = JSON.parse(localStorage.getItem('mis-pokemones')) || [];

            let check=pokemonesCapturados.find(item=>item.nombre===pokeAdd.nombre);
            console.log("CHECK ",check);
            
            
            if (check) {        
              console.log("El pokemon ya fue agregado ");
             Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Este pokemon ya fue agregado!',
              // footer: '<a href="">Why do I have this issue?</a>'
            })
          }else if (pokemonesCapturados.length>=5){
            console.log("No puedes capturar mas pokemones , alcanzaste el maximo posible");
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
          text: 'No puedes capturar mas pokemones , alcanzaste el maximo posible!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      else{
       
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
          title: `Has capturado a ${id}`
        });
        pokemonesCapturados.push(pokeAdd)
        localStorage.setItem('mis-pokemones', JSON.stringify(pokemonesCapturados))
      };
      
    }
    
    else if (resultado.isDenied) {
      console.log('El usuario ha hecho clic en Cancelar');
        // Realizar la acción deseada cuando el usuario hace clic en Cancelar
      }
    });
      
    }

    const consulta=document.getElementById("input-boton");
    consulta.addEventListener('click',buscarPokemon)
    
    function buscarPokemon(e) {
      function buscarPokemon(nombre) {
      return listaPokemons.find((poke)=>poke.nombre===nombre)
    }
  
  
      const input = document.getElementById("input-busqueda");
      console.log(input.value,"el INPUT TEXT");
      const nombre = input.value;
      const pokemon = buscarPokemon(nombre);
      
     
      const resultado = document.getElementById("resultado");
      if (pokemon) {
       resultado.innerHTML="";
        // resultado.innerHTML = `Nombre: ${pokemon.nombre} - Tipo: ${pokemon.descripcion} - Habilidad: ${pokemon.habilidad}`;
        // const infoDiv = document.getElementById('info');
        resultado.innerHTML+=`<p>"SE HA ENCONTRADO EL POKEMON: ${pokemon.nombre}"</p>`
        resultado.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src="${pokemon.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${pokemon.nombre}</h5>
        <p class="card-text">${pokemon.descripcion}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `
      } else {
        resultado.innerHTML = "No se encontró el Pokémon buscado.";
      }
      
      
      
    }