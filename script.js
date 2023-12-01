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

// Martina: 'Print the team middle age'
function middleAge(array) {
  let sumAge = array.reduce((a, num) => a + num.age, 0);
  let avgAge = sumAge / array.length;
  return avgAge;
};

console.log(middleAge(team));