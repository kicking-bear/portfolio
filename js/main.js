/*
    Daniel Manning's Portfolio Website
    Authors: Tristan Manning, Daniel Manning
    A showcase website for Daniel Manning's UX designs and experience.
*/

var doc;
var domParser;

// Homepage Sections
var titleBlock;
var recentWorkBlock;
var myStoryBlock;
var myLifeBlock;


console.log(doc);

const cardTemplate = 
    '<div class="recent-work-card">' 
+       '<div class="rw-image"><img src="img/filler-card-image.png" alt=""></div>'
+       '<div class="rw-info-block">'
+           '<div class="rw-title">LOGO MODULE RESEARCH</div>'
+           '<span class="rw-tag-group"><div class="rw-tag rw-red">UX Designer</div><div class="rw-tag rw-blue">UX Design</div></span>'
+           '<div class="rw-description">Created and led the base design for one of our major front-facing business sites at Martindale-Hubbell. My design was pushed and approved by the project managers, working closely with the team to meet their business needs.</div>'
+       '</div>'
+   '</div>';

function initializeMain() {
    doc = document;
    domParser = new DOMParser();
    generateRWSection(doc.getElementsByTagName('main')[0]);
}

function generateRWSection(mainTag) {
    recentWorkBlock = doc.createElement('section');
    recentWorkBlock.setAttribute('id','recent-work');
    recentWorkBlock.classList.add('body-section', 'content-block');
    recentWorkBlock.innerHTML = '<div class="section-title"><h2>Recent Work</h2></div>';

    mainTag.appendChild(recentWorkBlock);
}

function generateCardCarousel() {

}

function generateCard() {
    //let recentWorkCard = document.createElement('div');
    //recentWorkCard.className = 'recent-work-card';
    let recentWorkCard = domParser.parseFromString(cardTemplate, "text/html").body.getElementsByClassName('recent-work-card')[0];
    //recentWorkCard.innerHTML = cardTag;
    console.log(recentWorkCard);
    //recentWorkCard.innerHTML = "This is a DOM object";
    return recentWorkCard;
}

function addNewCard() {
    let card = generateCard();
    recentWorkBlock.appendChild(card);
    //let recentWork = doc.getElementById("recent-work");
    //console.log(card);
    //recentWork.getElementsByClassName("content-block")[0].appendChild(card);
}

initializeMain();

addNewCard();