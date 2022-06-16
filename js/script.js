// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//costanti
const mioArray = generatedRandom(5, 1, 10);
console.log(mioArray);
//funzione numeri casuali

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