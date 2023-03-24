//Cree element input type txt (comppertement naturel,)

// comment se premunir du cptmt par defaut du formulaire, lorsque l'on soumet un form la page
//il faut un écouter d'evenement, ici form evnmt submit, sur form 
//addevent 2 param : even et fontion callback
//event sur input est un input

//append
let inputValue = "";
const maDiv = document.querySelector("#maDiv");
let affichage = document.createElement("form");
let affichage1 = document.createElement("input");
affichage1.setAttribute("type","text");
affichage.append(affichage1);
document.body.append(affichage);
let affichage2 = document.createElement("p");
document.body.append(affichage2);


// comportement naturel = capacité de faire un submit sans présence de bouton
affichage.addEventListener("submit",e=>{
    console.log(e);  // - e evenement du submit
    e.preventDefault();  // ca empeche de rafrechire la page
    let par = document.createElement("p"); // on cre un element "p" et en le stock dans par ( ca dovienne objet)
    inputValue = affichage1.value; // on recuper la valeur d'input et en la stoc dans la variable inputValue
    par.innerText = inputValue; //on affiche dans le paragrapche la valeur d'iput Value
    document.body.append(par); // on ajut le paragraphe dans le body
});



let open = document.querySelector("#open")
open.addEventListener("click", ()=>{
    maDiv.classList.add("active");
})

let close = document.querySelector("#close")
close.addEventListener("click", ()=>{
    maDiv.classList.remove("active");
})

//récupérer la valeur rentrée dans 
//l'input et le stocker dans la variable inputValue 
//sur un évènement (soumission de formulaire submit, 
//ou quand on rentre des données dans l'input input)

// 2 param event et fct callback

