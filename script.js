// Fonciont 1: Clic sur le body
let clickCount = 0;
addEventListener("click", function () { 
    clickCount++;
    console.log("click", clickCount);
});

// Fonciont 2: Hamburger menu toggle
const hamburgerButton = document.querySelector('.navbar-toggler');
console.log("Bouton trouvé :", hamburgerButton);
const menuHeader = document.getElementById('navbarHeader');
console.log("Menu trouvé :", menuHeader);
hamburgerButton.addEventListener("click", function() {
    menuHeader.classList.toggle("collapse");
});

// Fonction 3 : edit la première card en rouge
const firstCard = document.querySelector('.card');
console.log("Première card trouvée :", firstCard);
const firstCardEditButton = firstCard.querySelector('.btn-outline-secondary');
console.log("Bouton edit trouvé :", firstCardEditButton);

firstCardEditButton.addEventListener("click", function() {
    console.log("Clic détecté !"); 
    firstCard.style.setProperty('color', 'red', 'important');
    console.log("Couleur appliquée :", firstCard.style.color); 
});

// Fonctionnalité 4 : toggle vert sur la 2ème card
const allCards = document.querySelectorAll('.card');
const secondCard = allCards[1];
const secondCardEditButton = secondCard.querySelector('.btn-outline-secondary');

secondCardEditButton.addEventListener("click", function() {
    if (secondCard.style.color === 'green') {
        console.log("C'est vert, on le retire");
        secondCard.style.setProperty('color', '', '');
    } else {
        console.log("C'est pas vert, on met vert");
        secondCard.style.setProperty('color', 'green', 'important')
    }
});
