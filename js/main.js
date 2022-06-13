/*
    Daniel Manning's Portfolio Website
    Authors: Tristan Manning, Daniel Manning
    A showcase website for Daniel Manning's UX designs and experience.
*/

var doc = document;
var domParser = new DOMParser();

console.log(doc);

const cardContent = '<div class="recent-work-card">'
    +   '<p>This is a card</p>'
    + '</div>';


function initializeMain() {

}

function generateCardCarousel() {

}

function generateCard() {
    let recentWorkCard = document.createElement('div');
    recentWorkCard.className = 'recent-work-card';
    //let recentWorkCard = domParser.parseFromString(cardContent, 'text/html');
    recentWorkCard.innerHTML = "This is a DOM object";
    return recentWorkCard;
}

function addNewCard() {
    let card = generateCard();
    let recentWork = document.getElementById("recent-work");
    console.log(card);
    recentWork.getElementsByClassName("content-block")[0].appendChild(card);
}

addNewCard();