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



const cardTemplate = 
    '<form action="./project.html" method="GET">'
+      '<button class="project-name" name="project-name" value="">'
+           '<div class="flex-container recent-work-card">' 
+              '<div class="rw-image crop-image"><img src="" alt=""></div>'
+              '<div class="rw-info-block">'
+                   '<div class="rw-title"></div>'
+                  '<span class="rw-tag-group"></span>'
+                  '<div class="rw-description"></div>'
+              '</div>'
+           '</div>'
+       '</button>'
+   '</form>'
    ;

const mainData =
{
    "colors":
    {
        "UX Research": "#F8C3AC",
        "UX Design": "#ACEAF8",
        "UI Design": "#DFF8AC"
    },
    "projects":
    [
        {
            "title": "Salamone",
            "tags":
            [
                "UX Research",
                "UX Design"
            ],
            "imageSrc": "./img/project0.png",
            "description":
                "Created and led the base design for one of our major front-facing business sites at Martindale-Hubbell. My design was pushed and approved by the project managers, working closely with the team to meet their business needs."
        },
        {
            "title": "Logo Module",
            "tags":
            [
                "UI Design",
                "UX Design",
                "UX Research"
            ],
            "imageSrc": "./img/project1.png",
            "description":
                "Created and led the base design for one of our major front-facing business sites at Martindale-Hubbell. My design was pushed and approved by the project managers, working closely with the team to meet their business needs."
        },
        {
            "title": "Market Your Firm",
            "tags":
            [
                "UI Design"
            ],
            "imageSrc": "./img/project2.png",
            "description":
                "Created and led the base design for one of our major front-facing business sites at Martindale-Hubbell. My design was pushed and approved by the project managers, working closely with the team to meet their business needs."
        },
        {
            "title": "Captorra Banner Animation",
            "tags":
            [
                "UI Design",
                "UX Design",
                "UX Research"
            ],
            "imageSrc": "./img/project1.png",
            "description":
                "Created and led the base design for one of our major front-facing business sites at Martindale-Hubbell. My design was pushed and approved by the project managers, working closely with the team to meet their business needs."
        }
    ]
};


function initializeMain() {
    doc = document;
    domParser = new DOMParser();
    generateRWSection(doc.getElementsByTagName('main')[0]);
}

function generateRWSection(mainTag) {
    recentWorkBlock = doc.createElement('section');
    recentWorkBlock.setAttribute('id','recent-work');
    recentWorkBlock.classList.add('light-section', 'content-block');
    recentWorkBlock.innerHTML = '<div class="section-title"><h1>Recent Work</h1></div>';

    mainTag.appendChild(recentWorkBlock);
}

function generateRWCard() {

    let recentWorkCardContainer = domParser.parseFromString(cardTemplate, "text/html").body;
    let recentWorkCard = recentWorkCardContainer.getElementsByTagName('button')[0].getElementsByClassName('recent-work-card')[0];

    return recentWorkCardContainer;
}

function generateRWCard(rwIndex) {
    let project = mainData['projects'][rwIndex];
    let recentWorkCardContainer = domParser.parseFromString(cardTemplate, "text/html").body;
    let recentWorkCard = recentWorkCardContainer.getElementsByTagName('button')[0].getElementsByClassName('recent-work-card')[0];

    recentWorkCardContainer.getElementsByTagName('button')[0].setAttribute("value", project['title']);

    recentWorkCard.getElementsByClassName('rw-image')[0].getElementsByTagName('img')[0].src = project['imageSrc'];
    recentWorkCard.getElementsByClassName('rw-title')[0].innerHTML = project['title'];

    let tagGroup = recentWorkCard.getElementsByClassName('rw-tag-group')[0];
    
    for(let i = 0; i < project['tags'].length; i++) {
        let tagValue = project['tags'][i];
        let tagDiv = doc.createElement('div');
        tagDiv.classList.add('rw-tag');
        tagDiv.style.backgroundColor =  mainData['colors'][tagValue];
        tagDiv.innerHTML = tagValue;

        tagGroup.appendChild(tagDiv);
    }

    recentWorkCard.getElementsByClassName('rw-description')[0].innerHTML = project['description'];
    recentWorkCard.getElementsByClassName('rw-title')[0].innerHTML = project['title'];
    

    return recentWorkCardContainer;
}

function addNewRWCard() {
    let card = generateRWCard();
    recentWorkBlock.appendChild(card);
}

function addNewRWCard(rwIndex) {
    let card = generateRWCard(rwIndex);
    recentWorkBlock.appendChild(card);
}

function generateRWCardGroup() {
    for (let i = 0; i < mainData['projects'].length; i++) {
        addNewRWCard(i);
    }
}

initializeMain();

generateRWCardGroup();