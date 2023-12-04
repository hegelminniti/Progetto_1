const team = [
    {
        name: "Hegel",
        surname: "Minniti",
        age: 23,
        hobby: "Musica, videogames",
        favoriteFood: "Impossibile scegliere",
        favoriteVideoGame: "Palia",
        favoriteFilm: "Sette anime",
        favoriteBook: "Nessuno si salva da solo",
        petName: "Ginger, Yuki, Reneé, Ciccio",
    },
    {
        name: "Martina",
        surname: "Mancuso",
        age: 32,
        city: "Milano",
        hobby: "reading",
        favoriteFood: "indian food",
        favoriteVideoGame: "tomb rider",
        favoriteFilm: "mamma mia",
        favoriteBook: "solo bagaglio a mano",
        petName: "Neve",
    },
    {
        name: "Alessandro",
        surname: "Vaccaro",
        age: 31,
        city: "Pisa",
        hobby: "Wrestling, musica , videogames",
        favoriteFood: "Pizza",
        favoriteVideoGame: "World Of Warcraft",
        favoriteFilm: "Il Miglio Verde",
        favoriteBook: "Il Ciclo dell'Odio",
        petName: "Giorgio",
    },
    {
        name: "Giampiero",
        surname: "Franconieri",
        age: 25,
        city: "Rizziconi",
        hobby: "Power Lifting",
        favoriteFood: "Spaghetti allo scoglio",
        favoriteVideoGame: "Forza Horizon 4",
        favoriteFilm: "Il buono, il brutto e il cattivo",
        favoriteBook: "",
        petName: ""
    },
    {
        name: "Davide",
        surname: "Lodde",
        age: 30,
        city: "Cagliari, Sardegna",
        hobby: "Development",
        favoriteFood: "Impossibile scegliere",
        favoriteVideoGame: "Impossibile scegliere",
        favoriteFilm: "Impossibile scegliere",
        favoriteBook: "Impossibile scegliere",
        petName: "Impossibile scegliere"
    }
];


// Giampiero Franconieri
// Print if there are some members with the same name (name)
// Stampa se ci sono membri con lo stesso nome (nome)
function sameName(array){
    let nomi=[];//variabile contenti solo i nomi degli oggetti
    array.forEach((user,i) => {//metodo per trasferire i nomi degli utenti
        nomi[i]=user.name;
    });
    let x=0//indice di egualName
    let egualName=[];//array contenenti i nomi duplicati
    for(let i in nomi)
        for(let j in nomi)// doppio for per iterare tutte le combinazioni nome:nome
            if((nomi[i]==nomi[j])&& (i!=j)) //controllo se ci sono nomi duplicati evitando di 'controllare se stesso'
            {
                egualName[x]=nomi[i];//salvataggio nomi duplicati
                x++;
            }
    egualName= [...new Set (egualName)];// elimino nomi duplicati per non stamparli più volte
    if(egualName[0])   //verifico esistenza di nomi duplicati    
        console.log(egualName);//stampo nomi duplicati
    else console.log("Nessun utente con lo stesso nome.");//se non ci sono doppi nomi rifesrisco quanto scritto.
}
sameName(team);