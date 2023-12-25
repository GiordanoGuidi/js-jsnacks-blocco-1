console.log('JS OK')
//CREO L'ARRAY
const arrayNumbers =[] ;
console.log(arrayNumbers)
// CHIEDO QUANTI ELEMENTI DEVE CONTENERE L'ARRAY
const numOfElements = parseInt(prompt('Quanti elementi deve contenere l\'array?', 7))
// GENERO UN NUMERO CASUALE
const randomNumbers =  Math.floor((Math.random() * 100) + 1);
console.log(numOfElements)
// ? VALIDAZIONE
if(numOfElements <= 6 || isNaN(numOfElements)){
    alert('L\'array deve essere un numero maggiore o uguale a 6');
}
// CREO CICLO FOR
for( let i = 1 ; i <= numOfElements; i++){
    // MOLTIPLICO NUMERO DI ELEMENTI PER IL NUMERO CASUALE
    const numbers = randomNumbers * (i);
    // PUSHO I NUMERI RANDOM NELL'ARRAY
    arrayNumbers.push(numbers);
    // STAMPO GLI ULTIMI 5 NUMERI DELL'ARRAY
    console.log(arrayNumbers.slice(-5))
}