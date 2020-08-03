alert('Rispondi a qualche semplice domanda e ricevi subito la tua password personalizzata e infallibile. Ok per continuare.')

// Chiedi all’utente il suo nome,

var nomeUtente = prompt("Qual'è il tuo nome?");
console.log (nomeUtente);
// poi chiedi il suo cognome,
var cognomeUtente = prompt("Qual'è il tuo cognome?");
console.log (cognomeUtente);
// poi chiedi il suo colore preferito
var colorePreferito = prompt("Qual'è il tuo colore preferito?");
console.log (colorePreferito);
// Infine scrivi sulla pagina nomecognomecolorepreferito19
var passwordGenerata = nomeUtente + cognomeUtente + colorePreferito + '19';
document.getElementById("password").innerHTML = passwordGenerata;
