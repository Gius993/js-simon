// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//costanti
const mioArray = generatedRandom(5, 1, 10);
alert(mioArray);
//funzione numeri casuali
setTimeout(function(){
	//5 prompt
	// let numeroUtente = [];
	let arrayTrue = [];
	let arrayFalse = [];
	let numeroUtente = [];
	for(i = 1; i <= 5; i++){
		 numeroUtente = parseInt(prompt('inserisci numero'));
		
		 //ogni numero in un array
		 //vanno inseriti in array giusto o sbagliato
		 if(mioArray.includes(numeroUtente)){
			 arrayTrue.push(numeroUtente);
		 }else{
			 arrayFalse.push(numeroUtente);
		 }
		 console.log(arrayTrue);
		 console.log(arrayFalse);
	}
}
, 1000);
//funzione generazione random numeri

function generatedRandom(bombNumber, minBomb, maxBomb){
	const randomBombArray = [];
	while(randomBombArray.length < bombNumber) {
		const randomNumber = getRndInteger(minBomb, maxBomb);
		if(!randomBombArray.includes(randomNumber)){
			randomBombArray.push(randomNumber);
		}
	}
	console.log(randomBombArray);
	return randomBombArray;

	function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	  }
}