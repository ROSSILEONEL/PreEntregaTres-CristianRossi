const chooise= document.querySelectorAll('.partner');
const h1=document.getElementById('selection')
console.log(chooise);

chooise.forEach((boton)=>{
boton.addEventListener("click",chooisePartner);
})

function chooisePartner(e){
    const select =e.currentTarget.id
    console.log(select);
    cargarSelected(select);
}
const divChooise= document.querySelector('.container-chooise')


function cargarSelected(pokemon) {
    h1.innerText="FELICITACIONES!";
    
    // pokemon=="bulbasaur"?divChooise.innerHTML="":console.log("algo paso");;
    if(pokemon=="bulbasaur"){
   divChooise.innerHTML="";
    divChooise.innerHTML+=`
    <div class=" div-sel">
    <h1 class="h1-select">Elegiste a BULBASAUR</h1>
    <img src="../assets/image/selectB.png" class=" img-selected" alt="...">
    <a class=" btn btn-primary" href="../pages/partner.html">VOLVER A ELEGIR</a>
    </div>`
}else if(pokemon=="squirtle"){
    divChooise.innerHTML="";
    divChooise.innerHTML+=`
    <div class=" div-sel">
    <h1 class="h1-select">Elegiste a SQUIRTLE</h1>
    <img src="../assets/image/selectS.webp" class=" img-selected" alt="...">
    <a class=" btn btn-primary" href="../pages/partner.html">VOLVER A ELEGIR</a>
    </div>`
}else{
    divChooise.innerHTML="";
    divChooise.innerHTML+=`
    <div class=" div-sel">
    <h1 class="h1-select">Elegiste a CHARMANDER</h1>
    <img src="../assets/image/selectC.png" class=" img-selected" alt="...">
    <a class=" btn btn-primary" href="../pages/partner.html">VOLVER A ELEGIR</a>
    </div>`
}

}