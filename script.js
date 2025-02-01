

function myFunction1() {
	alert('Teste tes connaissances!\n1) Les poumons sont un organe appartenant à quel appareil?\n2) Dans quelle région anatomique se situe cet organe?\n3) Quelles sont les fonctions assurées par les poumons?\n4) Cite 3 pathologies associées à cet organe.');
}

function envoyerMessage() {
	var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	
	if (nom === "" || prenom === "") {
		alert("Veuillez remplir tous les champs.");
	}
	else {
		alert(`Merci ${prenom} ${nom}. Votre message a bien été envoyé.\nUne réponse vous sera apportée dans les 48h.`);
	}
}

function monPseudo() {
	let text;
	let person = prompt("Veuillez entrer votre pseudo", "");
	if (person == null || person == "") {
		text = "Vous n'avez pas choisis de pseudo.";
	} else {
		text = "BIENVENUE " + person + " !";
		}
	document.getElementById("demo").innerHTML = text;
}

function myCheckbox() {
	var checkBox = document.getElementById("cours6");
	if (checkBox.checked == true){
		text.style.display = "block";
	} else {
		text.style.display = "none";
  }
}

function bigImg(x) {
  x.style.height = "170px";
  x.style.width = "170px";
}

function normalImg(x) {
  x.style.height = "125px";
  x.style.width = "125px";
}