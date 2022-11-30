class Mix {

    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.html = document.createElement("div");
        this.image = `url("images/smiley/smiley-10.png")`;

        numSelect.addEventListener ("change", (event) => {

            zoneCartes.style.width = event.target.value + "px";
        
        });
    }


    get getHtml() {

        this.html.classList.add("flipcard", "h");

        const divFront = document.createElement('div');
        divFront.classList.add("front", "interrogation");
        divFront.textContent = "?";
    
        const divBack = document.createElement('div');
        divBack.classList.add("back", "smiley");
        divBack.style.backgroundImage = this.image;
    
    
        this.html.append(divFront);
        this.html.append(divBack);
    
        const divPre = document.createElement('div');
        const divNom = document.createElement('div');
    
        divPre.classList.add("prenom");
        divPre.textContent = this.prenom;
        divNom.classList.add("nom");
        divNom.textContent = this.nom;
    
        divBack.appendChild(divPre);
        divBack.appendChild(divNom);

        return this.html;
    }

    flipCard() {
        this.html.classList.toggle('flip')
    }

    set setNom(nom) {
        this.nom = nom;
        this.html.querySelector('.nom').textContent = this.nom;
        
    }
    set setPrenom(prenom) {
        this.prenom = prenom;
        this.html.querySelector('.prenom').textContent = this.prenom;
    }

    set setImage(image) {
        this.image = image;
        this.html.querySelector('.smiley').style.backgroundImage = this.image;
    }


}


