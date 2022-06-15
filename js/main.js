/*
    Daniel Manning's Portfolio Website
    Authors: Tristan Manning, Daniel Manning
    A showcase website for Daniel Manning's UX designs and experience.
*/

var doc = document;
var domParser = new DOMParser();

console.log(doc);

const cardContent = 
    '<div class="recent-work-card">' 
+       '<div class="rw-image"><img src="img\\filler-card-image.png" alt=""></div>'
+       '<div class="rw-info-block">'
+           '<div class="rw-title">LOGO MODULE RESEARCH</div>'
+           '<span class="rw-tag-group"><div class="rw-tag rw-red">UX Designer</div><div class="rw-tag rw-blue">UX Design</div></span>'
+           '<div class="rw-description">Created and led the base design for one of our major front-facing business sites at Martindale-Hubbell. My design was pushed and approved by the project managers, working closely with the team to meet their business needs.</div>'
+       '</div>'
+   '</div>';

function initializeMain() {

}

function generateCardCarousel() {

}

function generateCard() {
    //let recentWorkCard = document.createElement('div');
    //recentWorkCard.className = 'recent-work-card';
    let recentWorkCard = domParser.parseFromString(cardContent, "text/html").body.getElementsByClassName('recent-work-card')[0];
    //recentWorkCard.innerHTML = cardTag;
    console.log(recentWorkCard);
    //recentWorkCard.innerHTML = "This is a DOM object";
    return recentWorkCard;
}

function addNewCard() {
    let card = generateCard();
    let recentWork = document.getElementById("recent-work");
    //console.log(card);
    recentWork.getElementsByClassName("content-block")[0].appendChild(card);
}

addNewCard();