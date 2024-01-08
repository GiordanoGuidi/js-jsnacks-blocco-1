//CREO L'ARRAY
const arrayNumbers =[] ;
// CHIEDO QUANTI ELEMENTI DEVE CONTENERE L'ARRAY
const numOfElements = parseInt(prompt('Quanti elementi deve contenere l\'array?', 7))
// CREO L'ELEMENTO HTML
const paragraphElement = document.createElement('p')
// LO COLLEGO AL FILE HTML
document.body.appendChild(paragraphElement)

// # VALIDAZIONE
if(numOfElements < 6 || isNaN(numOfElements)){
    alert('L\'array deve essere un numero maggiore o uguale a 6');
}else{
    // CREO CICLO FOR
    for( let i = 1 ; i <= numOfElements; i++){
        // GENERO UN NUMERO CASUALE ALL'INTERNO DEL CICLO
        const randomNumbers =  Math.floor((Math.random() * 100) + 1);
        // MOLTIPLICO NUMERO DI ELEMENTI PER IL NUMERO CASUALE
        // const numbers = randomNumbers * [i];
        console.log(randomNumbers)
        // PUSHO I NUMERI RANDOM NELL'ARRAY
        arrayNumbers.push(randomNumbers);
    }
}
// STAMPO GLI ULTIMI 5 NUMERI DELL'ARRAY IN PAGINA
paragraphElement.innerText = (arrayNumbers.slice(-5))

