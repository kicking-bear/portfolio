/*
    Daniel Manning's Portfolio Website
    Authors: Tristan Manning, Daniel Manning
    A showcase website for Daniel Manning's UX designs and experience.
*/

var doc = document;
var domParser = new DOMParser();

const cardContent = 
    '<div class="recent-work-card">' 
+       '<div class="rw-image"></div>'
+       '<div class="rw-info-block">'
+           '<div class="rw-title"></div>'
+           '<span class="rw-tag-group"></span>'
+           '<div class="rw-description"></div>'
+       '</div>'
+   '</div>';

const mainData =
{
    "colors":
    [
        {"UX Research": "#F8C3AC"},
        {"UX Design": "#ACEAF8"},
        {"UI Design": "#DFF8AC"}
    ],
    "projects":
    [
        {
            "title": "LOGO MODULE RESEARCH",
            "tags":
            [
                "UX Research",
                "UX Design",
                "UI Design"
            ],
            "imageSrc": "./img/filler-card-image.png",
            "description":
                "Created and led the base design for one of our major front-facing business sites at Martindale-Hubbell. My design was pushed and approved by the project managers, working closely with the team to meet their business needs."
        },
        {
            "title": "LOGO MODULE RESEARCH",
            "tags":
            [
                "UX Research",
                "UX Design",
                "UI Design"
            ],
            "imageSrc": "./img/filler-card-image.png",
            "description":
                "Created and led the base design for one of our major front-facing business sites at Martindale-Hubbell. My design was pushed and approved by the project managers, working closely with the team to meet their business needs."
        }
    ]
};


function initializeMain() {

}

function generateCardCarousel() {
    
}

function generateCard() {
    let recentWorkCard = domParser.parseFromString(cardContent, "text/html").body.getElementsByClassName('recent-work-card')[0];
    let rwInfoBlock = recentWorkCard.getElementsByClassName('rw-info-block')[0];
    let currentProject = mainData.projects[0];

    recentWorkCard.getElementsByClassName('rw-image')[0].innerHTML = 
        '<img src="' + currentProject.imageSrc + '" alt="">';

        console.log(currentProject['title']);
    
    rwInfoBlock.getElementsByClassName('rw-title')[0].innerHTML = currentProject['title'];

    return recentWorkCard;
}

function addNewCard() {
    let card = generateCard();
    let recentWork = document.getElementById("recent-work");
    //console.log(card);
    recentWork.getElementsByClassName("content-block")[0].appendChild(card);
}

initializeMain();

addNewCard();