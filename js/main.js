/* --------------------------Data----------------------------------*/
let searchWord = [
    "poule",
    "developpeur",
    "maison",
    "arbre"
];
let userLife = 7;
let play = true;

/* ------------------------Functions--------------------------------*/
// Le Menu
function menu(){
var choiceMenu = prompt(`  -----------Menu----------- \r jouer : taper "J"\r règles : taper "R"\r quitter : taper "Q"`).toLowerCase();
    if (choiceMenu==="j"){
        choiceWord();
    }
    else if(choiceMenu==="r"){
        alert("Voici les règles : ")
        menu();
    }
    else if(choiceMenu==="q"){
        
        play = false;
    }
    else {
        alert("je n'ai pas compris");
        menu();
    }
};

//Odinateur choisit le mot aléatoire
function choiceWord (){
    if(play=== true){
    let choice = searchWord[Math.floor(Math.random() * searchWord.length)];
    choice = choice.split("");
    console.log(choice);
    return(choice);}else{
        alert("a bientot!");
    }
};

// remplace le mot par des underscores
function hide(){
let hideWord =[];
    for (var i = 0; i < (choice.length); i++){
        (hideWord.push(" _ "));
    }
return hideWord;
};

// Validation choix de la lettre
function validLetterChoice(){
    let letterChoice = prompt(hideWord + "\nEntrez votre lettre :");
        while (letterChoice.length!=1) { 
            letterChoice = prompt(hideWord + "\nErreur, veuillez rentrer 1 lettre!");
        }
    return letterChoice;  
};

//test si les tableaux sont égaux
function arrayEquals(choice, hideWord) {
    return Array.isArray(choice) &&
      Array.isArray(hideWord) &&
      choice.length === hideWord.length &&
      choice.every((val, index) => val === hideWord[index]);
};
/* -------------------------Le jeu----------------------------------*/
alert("Bienvenue sur le jeu du pendu");
menu();
let choice = choiceWord(play);
let hideWord =hide();

while(userLife>0 && arrayEquals(choice, hideWord)===false){
    let letterChoice = validLetterChoice();
        if(choice.includes(letterChoice)){ 
            for (var i = 0; i<choice.length ; i++){
                if(choice[i]===letterChoice){
                    hideWord[i]=letterChoice;
                    alert(hideWord);
                }   
            }
        } 
        else {
            userLife -= 1;
            alert(`Il n'y a pas de : "${letterChoice}" . Il vous reste : ${userLife} chances`);
        }
};
if (arrayEquals(choice, hideWord)===true){
    alert("vous avez gagné");
}       
else{
    alert("Vous avez perdu !");
}
