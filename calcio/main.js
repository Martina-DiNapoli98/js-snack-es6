/* creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

/* creo un array di squadre di calcio */
let squadre = [
    {
        nome : "napoli",
        punti: 0,
        falli: 0
    },
    {
        nome : "juve",
        punti: 0,
        falli: 0
    },
    {
        nome : "milan",
        punti: 0,
        falli: 0
    },
    {
        nome : "inter",
        punti: 0,
        falli: 0
    },
    {
        nome : "roma",
        punti: 0,
        falli: 0
    },

]



    
/* genero numeri randomici con una funzione */
 function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/* creo un ciclo per inserire i numeri randomici al posto dello 0 */
for( let i = 0; i < squadre.length; i++){
    squadre[i].punti = generaNumeroCasuale(1, 100)
    squadre[i].falli = generaNumeroCasuale(1, 100)
}
/* stampo in console i numeri randomici */
console.log(squadre);

/* dichiaro un  array vuoto */
let altreSquadre = [];
/* creo un ciclo per pushare i nomi delle squadre e i falli all'interno dell'array vuoto */
for(let i = 0;  i < squadre.length; i++ ){
    altreSquadre.push({nome: squadre[i].nome, falli: squadre[i].falli})
}
/* stampo in console il mio array */
console.log(altreSquadre);
