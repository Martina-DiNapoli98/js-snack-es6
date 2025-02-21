/* creo un array di bici da corsa */

let bici = [
    { 
        name :"mtb",
        color: "bianco",
        weight: 32,
        price: 200

},
{
    name: " montain",
    color: "bianco",
    weight: 27,
    price: 170
},
{
    name: " enduro",
    color: "silver",
    weight: 20,
    price: 220
},
{
    name: " trail",
    color: "giallo",
    weight: 10,
    price: 150
},
{
    nome: " fat-bike",
    colore: "nero",
    weight: 15,
    price: 300
}
]
/* stampo in console l'array di bici */
console.log(bici);
/* dichiaro il peso minimo */
let pesoMinimo = 0;
/* creo un ciclo per cercare la bici con il peso minore */
for(let i = 0; i < bici.length; i++){
    if(bici[i].weight < bici[pesoMinimo].weight){
        pesoMinimo = i
    }
}
/* stampo in console la bici con il peso minore */
console.log(bici[pesoMinimo].weight);

