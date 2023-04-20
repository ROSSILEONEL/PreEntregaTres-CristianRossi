const listaPokemons=[
    {
      "nombre": "Pikachu",
      "descripcion": "Este Pokémon tiene bolsas en las mejillas que generan electricidad poderosa cuando se produce tensión. Tiene la capacidad de liberar cargas eléctricas con facilidad.",
      "habilidad": "Electricidad estática",
      "color": "Amarillo",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
      "nombre": "Charizard",
      "descripcion": "Charizard es un feroz dragón volador que puede escupir fuego y tiene la capacidad de volar a altas velocidades. Es muy poderoso y un gran competidor en batallas de Pokémon.",
      "habilidad": "Mar llamas",
      "color": "Rojo",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
      "nombre": "Squirtle",
      "descripcion": "Squirtle es una pequeña tortuga con una concha que lo protege de los ataques enemigos. Puede disparar agua a alta velocidad y también puede nadar en agua con facilidad.",
      "habilidad": "Torrente",
      "color": "Azul",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      "nombre": "Bulbasaur",
      "descripcion": "Bulbasaur es una criatura pequeña y adorable que tiene una planta en su espalda. La planta puede absorber los rayos del sol y convertirlos en energía para Bulbasaur.",
      "habilidad": "Espesura",
      "color": "Verde",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
      "nombre": "Jigglypuff",
      "descripcion": "Jigglypuff es un Pokémon redondo y rosa que puede cantar una canción que hace dormir a cualquier persona o Pokémon que la escuche. Es muy amistoso y le encanta cantar.",
      "habilidad": "Canto cura",
      "color": "Rosado",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
      "nombre": "Mewtwo",
      "descripcion": "Mewtwo es un Pokémon legendario que fue creado artificialmente en un laboratorio. Es extremadamente poderoso y puede controlar las mentes de otros Pokémon y humanos.",
      "habilidad": "Presión",
      "color": "Morado",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    {
      "nombre": "Eevee",
      "descripcion": "Eevee es una criatura adorable que puede evolucionar en varios tipos diferentes de Pokémon, dependiendo de cómo se críe. Es muy adaptable y puede sobrevivir en cualquier entorno.",
      "habilidad": "Adaptable",
      "color": "Marrón",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },{    "nombre": "Gyarados",    "descripcion": "Gyarados es un Pokémon muy temido por su gran tamaño y fuerza. Tiene una habilidad natural para controlar el agua y causar grandes maremotos.",    "habilidad": "Intimidación",    "color": "Azul oscuro",    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"  },  {    "nombre": "Snorlax",    "descripcion": "Snorlax es un Pokémon muy dormilón que come todo el tiempo. Es muy resistente y puede dormir durante días sin interrupción.",    "habilidad": "Inmunidad",    "color": "Azul claro",    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"  },  {    "nombre": "Dragonite",    "descripcion": "Dragonite es un Pokémon muy poderoso que puede volar a altas velocidades y controlar los elementos del aire y del agua. Es muy amigable y protector con los demás Pokémon.",    "habilidad": "Multitipo",    "color": "Naranja",    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"  },  {    "nombre": "Umbreon",    "descripcion": "Umbreon es un Pokémon de tipo siniestro y muy nocturno. Puede manipular las sombras y es muy sigiloso en la oscuridad.",    "habilidad": "Sincronía",    "color": "Negro",    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"  },{    "nombre": "Lucario",    "descripcion": "Lucario es un Pokémon de tipo lucha y acero. Tiene una gran habilidad para sentir las auras y detectar las emociones de los demás.",    "habilidad": "Impasible",    "color": "Azul y negro",    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"  }];
    
    
    
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    //Almacenar producto por producto
    const listaSt=JSON.stringify(listaPokemons);
    console.log(listaSt);
    
    
    function mostrarTodos(listaPokemons) {
    for (const poke of listaPokemons) {
        guardarLocal(JSON.stringify(poke.nombre), JSON.stringify(poke.habilidad));
        const infoDiv = document.getElementById('info');
        infoDiv.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src="${poke.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${poke.nombre}</h5>
        <p class="card-text">${poke.descripcion}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `
      }
    } 

    mostrarTodos(listaPokemons);

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
      
      console.log(typeof(pokemon),"tipe of");
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