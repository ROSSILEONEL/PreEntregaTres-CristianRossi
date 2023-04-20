

//----------JSON DE POKEMONES-------------------------------------------
//----------JSON DE POKEMONES-------------------------------------------
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
  }];
  const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
  //Almacenar producto por producto
  const listaSt=JSON.stringify(listaPokemons);
  console.log(listaSt);
  for (const poke of listaPokemons) {

      guardarLocal(poke.id, JSON.stringify(poke));
  }
  // o almacenar array completo
  // guardarLocal("listaProductos", JSON.stringify(listaPokemons));
  


const partner="";
function chooisePokemon() {
    let h1=document.getElementById("selection");
  h1.innerText="ELEGISTE A TU COMPAÑERO ";
  
}

const formRegistrer=document.querySelector('.form-registrer');
console.log(formRegistrer);

formRegistrer.addEventListener('submit',()=>{
  const userInput=document.getElementById('username').value;
  const passInput=document.getElementById('password').value;
  const confirmPassInput=document.getElementById('confirm-password').value;
// tareas pendientes: validar que el user no este registrado, cargar mas de un user
  if (passInput !== confirmPassInput) {
    alert('Passwords do not match!');
    return;
  }
  localStorage.setItem('username', userInput);
  localStorage.setItem('password', passInput);
  alert('Registration successful!');
  formRegistrer.reset();
});



