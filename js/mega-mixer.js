const ListeApprenants = ["BAALI Ike-David","DETHIER Maxime","DOMERGUE Jonathan","FALCONIER Franck","OZMANOV Alik","PENTEADO Anthony","PETIT Wilfrid","PICHOFF Brandon","TRAVASSOS Carl-Antoine"];


const zoneCartes = document.getElementById('sizer');
const numSelect = document.getElementById('numberSelect');
const placer = document.getElementById("boutonPlacer");
const init = document.getElementById("boutonInitialiser");




ListeApprenants.forEach(apprenant =>{

    console.log(apprenant);

    const divCarte = document.createElement('div');
    divCarte.classList.add("flipcard", "h");
    
    

    zoneCartes.appendChild(divCarte);

    const divFront = document.createElement('div');
    divFront.classList.add("front", "interrogation");
    divFront.textContent = "?";

    const divBack = document.createElement('div');
    divBack.classList.add("back", "smiley");
    divBack.style.backgroundImage = `url("images/smiley/smiley-10.png")`;


    divCarte.appendChild(divFront);
    divCarte.appendChild(divBack);

    const divPre = document.createElement('div');
    const divNom = document.createElement('div');

    divPre.classList.add("prenom");
    divNom.classList.add("nom")

    divBack.appendChild(divPre);
    divBack.appendChild(divNom);


    


})

numSelect.addEventListener ("change", (event) => {

    zoneCartes.style.width = event.target.value + "px";

});
const flip = document.querySelectorAll('.flipcard');

placer.addEventListener ("click", (event) => {

    
  
    flip.forEach((flipped, index) =>{
            
        setTimeout(() => {
            flipped.classList.toggle('flip');
        }, 500*index);
    })
    
    const mixedApprenants = _.shuffle(ListeApprenants);
    console.log(mixedApprenants);


    mixedApprenants[0].split(' ')[0];
    console.log(mixedApprenants[0].split(' ')[1])
   


    mixedApprenants.forEach( name =>{

        flip.forEach((carte,index) => {

            carte.querySelector(".prenom").textContent = mixedApprenants[index].split(' ')[0];
            carte.querySelector(".nom").textContent = mixedApprenants[index].split(' ')[1];
            carte.querySelector(".smiley").style.backgroundImage = "url(images/smiley/smiley-" + Math.floor(Math.random()*15+1) + ".png)";
    
        });  

    });

    placer.disabled = true;
    numSelect.disabled = true;
    init.disabled = false;
});

init.addEventListener('click', (event) => {

    placer.disabled = false;
    numSelect.disabled = false;
    init.disabled = true;

    const flip = document.querySelectorAll('.flipcard');

    flip.forEach((flipped) =>{
            
        flipped.classList.toggle('flip');
        
    })

})

