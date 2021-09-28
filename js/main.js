// Le Menu
function menu(){
let choiceMenu = prompt(`  -----------Menu----------- \r jouer : taper "J"\r règles : taper "R"\r quitter : taper "Q"`).toLowerCase();
    if (choiceMenu==="j"){
        play();
    }
    else if(choiceMenu==="r"){
        alert("Voici les règles : ")
        menu();
    }
    else if(choiceMenu==="q"){ 
        return;
    }
    else {
        alert("je n'ai pas compris");
        menu();
    }
};

//Odinateur choisit le mot aléatoire
function choiceWord (){
    let searchWord = [
        "Poule","Developpeur","Maison","Arbre",'Ane','Axe','Bel','Bip','Car','Col','Coq','Cor','Cou','Cri','Gag','Gaz','Gel','Jus','Net','Nul','Val','Ski','Sot','Tas','Tic','atre','Beau','Bete','Boxe','Brun','Cerf','Chez','Cire','Dame','Dent','Dock','Dodo','Drap','Dune','Emeu','Fado','Faux','Ibis','Jazz','Joli','Joue','Kaki','Logo','Loin','Long','Lune','Lynx','Mine','Mure','Ouie','Ours','Pion','Rhum','Ride','Rock','Seau','Test','Thym','Trou','Truc','User','Vert','Yogi','Watt','Acces','Aimer','Aloes','Assez','Avion','Awale','Balai','Banjo','Barbe','Bonne','Bruit','Buche','Cache','Capot','Carte','Chien','Crane','Cycle','ebene','Essai','Gifle','Honni','Jambe','Koala','Livre','Lourd','Maman','Moult','Noeud','Ortie','Peche','Poire','Pomme','Poste','Prune','Radar','Radis','Robot','Route','Rugby','Seuil','Taupe','Tenue','Texte','Tyran','Usuel','Valse','Acajou','Agneau','Alarme','Ananas','Angora','Animal','Arcade','Aviron','Azimut','Babine','Balade','Bonzai','Basson','Billet','Bouche','Boucle','Bronze','Cabane','Caiman','Cloche','Cheque','Cirage','Coccyx','Crayon','Garage','Gospel','Goulot','Gramme','Grelot','Guenon','Hochet','Hormis','Humour','Hurler','Jargon','Limite','Lionne','Menthe','Oiseau','Podium','Poulpe','Poumon','Puzzle','Quartz','Rapide','Seisme','Tetine','Tomate','Walabi','Whisky','Zipper','Abriter','Ballast','Baryton','Bassine','Batavia','Billard','Bretzel','Cithare','Chariot','Clairon','Corbeau','Cortege','Crapaud','Cymbale','Dentier','Djembe','Drapeau','Exemple','Fourmis','Grandir','Iceberg','Javelot','Jockey','Journal','Journee','Jouxter','Losange','Macadam','Mondial','Notable','Oxygene','Panique','Petrole','Poterie','Pouvoir','Renegat','Scooter','Senteur','Sifflet','Spirale','Sucette','Strophe','Tonneau','Trousse','Tunique','Ukulele','Vautour','Zozoter','Aquarium','Araignee','Arbalete','Archipel','Banquise','Batterie','Brocante','Brouhaha','Capeline','Clavecin','Cloporte','Debutant','Diapason','Gangster','Gothique','Hautbois','Herisson','Logiciel','Objectif','Paranoia','Parcours','Pastiche','Question','Quetsche','Scarabee','Scorpion','Symptôme','Tabouret','Tomahawk','Toujours','Tourisme','Triangle','Utopique','Zeppelin','Accordeon','Ascenseur','Ascension','Aseptiser','Autoroute','Avalanche','Balalaika','Bilboquet','Bourricot','Brillance','Cabriolet','Contrario','Cornemuse','Dangereux','epluchage','Feodalite','Forteresse','Gondolier','Graphique','Horoscope','Intrepide','Klaxonner','Mascarade','Metaphore','Narrateur','Peripetie','Populaire','Printemps','Quemander','Tambourin','Vestiaire','Xylophone','Acrostiche','Apocalypse','Attraction','Aventurier','Bouillotte','Citrouille','Controverse','Coquelicot','Dissimuler','Flibustier','Forestiere','Grenouille','Impossible','Labyrinthe','Maharadjah','Prudemment','Quadriceps','Soliloquer','Subjective','Baccalaureat','Abracadabra','Francophile','Pandemonium','Chlorophylle','Metallurgie','Metamorphose','Montgolfiere','Kaleidoscope','Conquistador','Conspirateur','Rhododendron','Qualification','Protozoaire','Quadrilatere','Zygomatique','Sorcellerie','Belligerant'
    ]
    let choice = (searchWord[Math.floor(Math.random() * searchWord.length)]).toLowerCase();
    choice = choice.split("");
    return(choice);}

// remplace le mot par des underscores
function hide(choice){
let hideWord =[];
    for (var i = 0; i < (choice.length); i++){
        (hideWord.push(" _ "));
    }
    return hideWord;
};

// Validation choix de la lettre
function validLetterChoice(hideWord){
    let letterChoice = prompt(hideWord + "\nEntrez votre lettre :");
        while (letterChoice.length!=1) { 
            letterChoice = prompt(hideWord + "\nErreur, veuillez rentrer 1 lettre!");
        }
    return letterChoice;  
};

//test si les tableaux sont égaux
function arrayEquals(choice, hideWord) {
    return choice.every((val, index) => val === hideWord[index]);    
};

// le jeu
function play() {
    let userLife = 7;
    let choice = choiceWord();
    let hideWord = hide(choice);   
    while(userLife>0 && arrayEquals(choice, hideWord)===false){
        let letter = validLetterChoice(hideWord);
            if(choice.includes(letter)){ 
                for (var i = 0; i<choice.length ; i++){
                    if(choice[i]===letter){
                        hideWord[i]=letter;
                        alert(hideWord);
                    }   
                }
            } 
            else {
                userLife -= 1;
                alert(`Il n'y a pas de : "${letter}" . Il vous reste : ${userLife} chances`);
            }
    };
    if (arrayEquals(choice, hideWord)===true){
        alert("vous avez gagné");
        menu();
    }       
    else{
        alert("Vous avez perdu !Le mot était : " + choice);
        menu();
    }  
  }
/* -------------------------initialisation du jeu----------------------------------*/
alert("Bienvenue sur le jeu du pendu");
menu();