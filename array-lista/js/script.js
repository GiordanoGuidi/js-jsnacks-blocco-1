 // CREO L'ARRAY
const frigorifero = ['banana','mela','pera','ciliegia','arancia','mandarino','cocomero','limone','fragola']
// AGGIUNGO LA PESCA
frigorifero.push('pesca')
// RECUPERO L'ELEMENTO
const paragraphElement= document.getElementById('paragraph')
let message = '';
let cocktail = false;
//CREO UN CICLO
for(let i = 0 ; i < frigorifero.length && !cocktail; i++){
    if(frigorifero[i] ==='cocomero'){
        cocktail = true;
    }
    
    if(cocktail){
        message = "Trovato! Devo solo preparare il cocktail.";
    }else{
        message = "Oh no, devo uscire a comprare il cocomero!";
    }
}

paragraphElement.innerText = message


