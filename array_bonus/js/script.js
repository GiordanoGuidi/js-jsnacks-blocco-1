//CREO ARRAY PIù CORTO
const animals = ['cane','gatto','topo','giraffa'];
// CREO ARRAY PIù LUNGO
const friends = ['jordi','gabriele','francesco','gianluca','matteo','jacopo','riccardo'];
// CREO JNA CONDIZIONE
if(friends.length > animals.length){
    for(let i = 0 ; i < friends.length && friends.length !== animals.length; i++){
        animals.push(friends[i]);
    }
}
console.log(animals);
console.log(friends)