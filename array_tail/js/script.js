console.log('JS OK')
//CREO L'ARRAY
const arrayNumbers =[] ;
console.log(arrayNumbers)
// CHIEDO QUANTI ELEMENTI DEVE CONTENERE L'ARRAY
const numOfElements = parseInt(prompt('Quanti elementi deve contenere l\'array?', 7))
console.log('elementi che costituiscono l\'array', numOfElements)
// CREO L'ELEMENTO HTML
const paragraphElement = document.createElement('p')
console.log('elemento html', paragraphElement)
// LO COLLEGO AL FILE HTML
document.body.appendChild(paragraphElement)

// # VALIDAZIONE
if(numOfElements < 6 || isNaN(numOfElements)){
    alert('L\'array deve essere un numero maggiore o uguale a 6');
}
// CREO CICLO FOR
for( let i = 1 ; i <= numOfElements; i++){
    // GENERO UN NUMERO CASUALE ALL'INTERNO DEL CICLO
    const randomNumbers =  Math.floor((Math.random() * 100) + 1);
    console.log('numero casuale', randomNumbers)
    // MOLTIPLICO NUMERO DI ELEMENTI PER IL NUMERO CASUALE
    const numbers = randomNumbers * (i);
    console.log('numeri casuali * i', numbers)
    // PUSHO I NUMERI RANDOM NELL'ARRAY
    arrayNumbers.push(numbers);
    console.log('array pieno',arrayNumbers)
}
// STAMPO GLI ULTIMI 5 NUMERI DELL'ARRAY IN PAGINA
paragraphElement.innerText = (arrayNumbers.slice(-5))

