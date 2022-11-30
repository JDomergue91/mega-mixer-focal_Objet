const listeApprenants = ["BAALI Ike-David","DETHIER Maxime","DOMERGUE Jonathan","FALCONIER Franck","OZMANOV Alik","PENTEADO Anthony","PETIT Wilfrid","PICHOFF Brandon","TRAVASSOS Carl-Antoine"];
const apprenantsObj = [];

const zoneCartes = document.getElementById('sizer');
const numSelect = document.getElementById('numberSelect');
const placer = document.getElementById("boutonPlacer");
const init = document.getElementById("boutonInitialiser");



listeApprenants.forEach((apprenant, index) =>{ 

    const apprenants = new Mix(apprenant.split(' ')[0], apprenant.split(' ')[1] );
    apprenantsObj.push(apprenants);


    zoneCartes.append(apprenants.getHtml);
    
});

placer.addEventListener ("click", (event) => {

  
    apprenantsObj.forEach((carte, index) =>{
            
        setTimeout(() => {
            carte.flipCard();
        }, 500*index);
    })
    
    const mixedApprenants = _.shuffle(listeApprenants);
    
    
    apprenantsObj.forEach((carte, index) =>{
        carte.setNom = mixedApprenants[index].split(' ')[0];
        carte.setPrenom = mixedApprenants[index].split(' ')[1];
        carte.setImage = "url(images/smiley/smiley-" + Math.floor(Math.random()*15+1) + ".png)";
    });

    placer.disabled = true;
    numSelect.disabled = true;
    init.disabled = false;
});

init.addEventListener('click', (event) => {

    placer.disabled = false;
    numSelect.disabled = false;
    init.disabled = true;

    apprenantsObj.forEach((carte) =>{
            
        carte.flipCard();
        
    })

})
