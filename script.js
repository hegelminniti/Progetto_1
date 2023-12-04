const team = [
    {
        name: "Hegel",
        surname: "Minniti",
        age: 23,
        city: "Gioia Tauro",
        hobby: "Musica, videogames",
        favoriteFood: "",
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
        favoriteFood: "",
        favoriteVideoGame: "",
        favoriteFilm: "",
        favoriteBook: "",
        petName: ""
    }
];

// Alessandro Vaccaro: Print the team in age order (name age).

function ageSort(array) { 
    let sortedAges = array.sort(
        (p1, p2) => (p1.age < p2.age) ? 1 : (p1.age > p2.age) ? -1 : 0);

    return sortedAges;
}

// Alessandro Vaccaro: Print the team in alphabetical order (surname name).

function surnameSort(array) {
    array.sort(function (a, b) {
        const nameA = a.surname.toUpperCase(); // ignore upper and lowercase
        const nameB = b.surname.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
    });
    return array;
}

// Martina Mancuso: Print the team middle age.

function middleAge(array) {
    let sumAge = array.reduce((a, num) => a + num.age, 0);
    let avgAge = sumAge / array.length;
    return avgAge;
};

// Davide Lodde: Print who has a pet (name petName).

function pet(array) {
    for (let persona of array) {
        if (persona.petName && persona.petName !== "Impossibile scegliere") {
            console.log(`${persona.name} ${persona.surname} ha un animale domestico di nome ${persona.petName}.`);
        } else {
            console.log(`${persona.name} ${persona.surname} non ha un animale domestico.`);
        }
    }
}

// Hegel Minniti: Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name).

function favGame(array) {
    const lolPlayers = array
        .filter(
            (member) =>
                member.favoriteVideoGame.toLowerCase() === "lol" ||
                member.favoriteVideoGame.toLowerCase() === "league of legends"
        )
        .map((member) => member.name);

    if (lolPlayers.length === 0) {
        console.log("Nessuno ha scelto come gioco preferito League of Legends.");
    } else {
        console.log(lolPlayers);
    }
}

// Giampiero Franconieri: Print if there are some members with the same name (name)

function sameName(array) {
    let nomi = [];//variabile contenti solo i nomi degli oggetti
    array.forEach((user, i) => {//metodo per trasferire i nomi degli utenti
        nomi[i] = user.name;
    });
    let x = 0//indice di egualName
    let egualName = [];//array contenenti i nomi duplicati
    for (let i in nomi)
        for (let j in nomi)// doppio for per iterare tutte le combinazioni nome:nome
            if ((nomi[i] == nomi[j]) && (i != j)) //controllo se ci sono nomi duplicati evitando di 'controllare se stesso'
            {
                egualName[x] = nomi[i];//salvataggio nomi duplicati
                x++;
            }
    egualName = [...new Set(egualName)];// elimino nomi duplicati per non stamparli più volte
    if (egualName[0])   //verifico esistenza di nomi duplicati    
        console.log(egualName);//stampo nomi duplicati
    else console.log("Nessun utente con lo stesso nome.");//se non ci sono doppi nomi rifesrisco quanto scritto.
}

//EXECUTE

let ageArray = ageSort(team.slice(0));
let sortedName = surnameSort(team);

for (let i = 0; i < sortedName.length; i++) { // print Surname - Name in ordine Alfabetico per cognome
    console.log(`Surname : ${sortedName[i].surname} , Name : ${sortedName[i].name}`);
}

for (let i = 0; i < ageArray.length; i++) { // print Name - Age in ordine di età
    console.log(`Name : ${ageArray[i].name}, Age : ${ageArray[i].age}`);
}

console.log(middleAge(team));

pet(team);

favGame(team);

sameName(team);

