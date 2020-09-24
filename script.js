// Elements html
var btnSubmit = document.getElementById("btn-submit");
var iptValues = document.querySelectorAll("input");

var realPassword = "123654";
var userPassword = "";

// Inputs remplis aléatoirement
// Lorsque la page charge 3 des 6 inputs demandés sont choisis aléatoirement et pré-complétés. Les inputs choisis ne sont pas modifiables par l'utilisateur.
function randomIndex() {
    var index = Math.floor(Math.random() * realPassword.length);
    return index;
}

numToGuess = 3;
done = false;
guessedIndexes = [];
while (done != true) {
    var index = randomIndex();
    var isPresent = guessedIndexes.indexOf(index);
    if (isPresent == -1) {
        guessedIndexes.push(index);
    }
    if (guessedIndexes.length >= numToGuess) {
        done = true;
    }
}

for (var guessedIndex of guessedIndexes) {
    var randomIpt = iptValues[guessedIndex];
    randomIpt.value = realPassword[guessedIndex];
    randomIpt.readOnly = true;
    randomIpt.style.border = "none";
    randomIpt.style.borderRadius = "50%";
    randomIpt.style.backgroundColor = "rgb(2, 128, 144)";
}

// Bouton de validation
// Au clique sur le bouton valider, les inputs entrés sont vérifiés et une réponse s'affiche selon le résultat de la vérification.
btnSubmit.addEventListener("click", function () {
    for (var iptValue of iptValues) {
        userPassword += iptValue.value;
    }
    if (userPassword == realPassword) {
        alert("Code correct.");
    } else {
        alert("Code incorrect !");
    }
});

// Clavier numérique
// Au clique sur les boutons "nombre", la valeur indiquée sur le bouton est entrée dans le premier input vide.
var btnsNumber = document.querySelectorAll(".btn-number");

for (var btnNumber of btnsNumber) {
    btnNumber.addEventListener("click", function (e) {
        for (var i = 0; i < 6; i++) {
            if (iptValues[i].value == "") {
                iptValues[i].value = e.target.value;
                break;
            }
        }
    });
}