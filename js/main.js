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


const bannerText = 
[
    "Designer",
    "Designer",
    "Designer",
    "Designer",
    "Designer"
]


const cardTemplate = 
'<a href="" class="content-block project-link">\
    <div class="flex-container recent-work-card">\
        <div class="rw-image crop-image"><img src="" alt=""></div>\
        <div class="rw-info-block">\
            <div class="rw-title"></div>\
            <div class="rw-tag-group"></div>\
            <div class="rw-description"></div>\
        </div>\
    </div>\
</a>';

const mainData =
{
    "colors":
    {
        "UX Research": "#F8C3AC",
        "UX Design": "#ACEAF8",
        "UI Design": "#DFF8AC",
        "Prototyping": "#F8ECAC",
        "Vis Dev": "#ACAFF8",
        "Motion Design": "#F6ACF8"
    },
    "projects":
    [
        {
            "title": `Salamone`,
            "tags":
            [
                "UX Design",
                "Vis Dev",
                "UI Design"
            ],
            "description":
                `Led the design refresh for one of our most high-profile clients at Martindale-Hubbell. From stylescapes to wireframes and completed designs. I was challenged with making their site more transparent and user-friendly.`
        },
        {
            "title": "Logo Module",
            "tags":
            [
                "UX Design",
                "UX Research",
                "Prototyping"
            ],
            "description":
                `Led the design proposal for new features on the logo module for WebManager. Created the prototype, drafted the questionaire, led the tests, and presented the results to development.`
        },
        {
            "title": "Market Your Firm",
            "tags":
            [
                "UX Design",
                "Vis Dev",
                "UI Design"
            ],
            "description":
                `Market Your Firm was my first design lead project at Martindale-Hubbell. This project was centered on making clear product offerings as well as defining the business.`
        },
        {
            "title": "Captorra Banner Animation",
            "tags":
            [
                "Motion Design",
                "Vis Dev"
            ],
            "description":
                `During the pandemic Captorra underwent a massive refresh of their site and branding. Using Lottie and After Effects I created a simple banner animation for their new site.`
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
    recentWorkBlock.classList.add('content-block');
    recentWorkBlock.innerHTML = '<div class="section-title"><h1>Recent Work</h1></div>';

    mainTag.appendChild(recentWorkBlock);

    generateRWCardGroup();
}

function generateRWCard(rwIndex) {
    let project = mainData['projects'][rwIndex];

    let projectLink = './project.html?project-name='+project['title'].replaceAll(' ', '-');

    let recentWorkCardContainer = domParser.parseFromString(cardTemplate, "text/html").body.getElementsByTagName('a')[0];
    let recentWorkCard = recentWorkCardContainer.getElementsByClassName('recent-work-card')[0];
    recentWorkCardContainer.setAttribute("href", projectLink);

    let rwImageSrc = ("./img/projects/" + project['title'] + "/card.png").toLowerCase().replaceAll(" ", "-");
    recentWorkCard.getElementsByClassName('rw-image')[0].getElementsByTagName('img')[0].src = rwImageSrc;
    
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