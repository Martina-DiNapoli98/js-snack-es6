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

console.log(bici);

let pesoMinimo = 0;

for(let i = 0; i < bici.length; i++){
    if(bici[i].weight < bici[pesoMinimo].weight){
        pesoMinimo = i
    }
}
console.log(bici[pesoMinimo].weight);

