// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.


// definizione variabili e array

var utente = prompt("Cognome");
var cognomi = ["Pisolo", "Gongolo", "Cucciolo", "Mammolo", "Brontolo", "Eolo", "Dotto"];


// inserisco il cognome dell'utente all'interno dell'arrey
var contenutotemp;
var cognome = document.getElementById("mio_id")
cognomi.push(utente);
cognomi.sort();


// Stampo a video la lista in ordine alfabetico

for (var i = 0; i < cognomi.length; i++){
contenutotemp = cognome.innerHTML;
cognome.innerHTML = contenutotemp + "<li>" + cognomi[i] + "</li>";
}


//Stampo a video la nuova posizione del cognome dell'utente
var position = cognomi.indexOf(utente) + 1;
document.getElementById("posizione").innerHTML = position;
