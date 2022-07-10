/*
    Daniel Manning's Portfolio Website
    Authors: Tristan Manning, Daniel Manning
    A generator for an individual recent project's page.
*/

var doc;
var domParser;
var projectObj;
var imageCollectionSrc;


const bannerTemplate = 
    '<div class="project-banner">\
        <div class="crop-image proj-banner-img"><img src="" alt=""></div>\
        <div class="proj-title"></div>\
        </div>\
    </div>';

const mainData =
{
    "projects":
    [
        {
            "title": "Salamone",
            
            "overview": "Internet Brands proprietary website builder WebManager, underwent a complete overhaul in 2020. This 2.0 version required a rework of many of the main core components and modules.\nThere was push to make the settings more user-friendly.\nI was in charge of leading a design change for the logo module. We needed a way to test the resizing option and so I created the prototype, drafted the questionnaire, and led the UX research for this project.",
            "role": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "challenge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            
            "process": 
            {
                "processIntro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                "processBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                "processBullets":
                [
                    "Process bullet point 1",
                    "Process bullet point 2",
                    "Process bullet point 3"
                ],
                "processConclusion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            
            "conclusion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
            "title": "Logo Module",
            
            "overview": "Created and led the base design for one of our major front-facing business sites at Martindale-Hubbell. My design was pushed and approved by the project managers, working closely with the team to meet their business needs.",
            "role": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "challenge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            
            "process": 
            {
                "processIntro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                "processBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                "processBullets":
                [
                    "Process bullet point 1",
                    "Process bullet point 2",
                    "Process bullet point 3"
                ],
                "processConclusion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            
            "conclusion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                
        },
        {
            "title": "Market Your Firm",
            
            "overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "role": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "challenge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            
            "process": 
            {
                "processIntro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                "processBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                "processBullets":
                [
                    "Process bullet point 1",
                    "Process bullet point 2",
                    "Process bullet point 3"
                ],
                "processConclusion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            
            "conclusion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
            "title": "Captorra Banner Animation",
            
            "overview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "role": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "challenge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            
            "process": 
            {
                "processIntro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                "processBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                "processBullets":
                [
                    "Process bullet point 1",
                    "Process bullet point 2",
                    "Process bullet point 3"
                ],
                "processConclusion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            
            "conclusion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
    ]
}; 

function initializeMain() {
    doc = document;
    domParser = new DOMParser();
    doc.title = fetchTitle();
    projectObj = mainData['projects'].find(proj => proj.title == doc.title);

    imageCollectionSrc = doc.title.toLowerCase().replaceAll(" ", "-");

    generateBanner(doc.getElementById('title-section'));

    let mainTag = doc.getElementsByTagName('main')[0]
    generateOverviewGridSection(mainTag);
    generateChallengeGridSection(mainTag);
    generateProcessSection(mainTag);
    generateConclusionSection(mainTag);
}

function fetchTitle(){
    let pageURL = window.location.search;
    let pageParams = new URLSearchParams(pageURL);
    let projectTitle = pageParams.get('project-name');

    return projectTitle;
}



/* Banner Section */

function generateBanner(titleSection) {
    
    let bannerBlock = domParser.parseFromString(bannerTemplate, "text/html").body;
    
    let bannerSrc = "./img/projects/" + imageCollectionSrc + "/banner.png";
    bannerBlock.getElementsByClassName('proj-banner-img')[0].getElementsByTagName('img')[0].setAttribute('src', bannerSrc);

    // TODO: Potentially add in the title of the project, either in the banner, above, or below.
    // TODO: Coordinate what the best option should be.

    titleSection.appendChild(bannerBlock);

}



/* Overview Grid Section */

function generateOverviewGridSection(mainTag) {
    let gridSection = doc.createElement('section');
    gridSection.setAttribute('id','overview-grid-section');

    let projGrid = doc.createElement('div');
    projGrid.setAttribute('id', 'proj-grid-container');
    projGrid.classList.add('flex-container', 'proj-grid');

    // let gridRow2 = doc.createElement('div');
    // let challengeSection = doc.createElement('div');
    // challengeSection.classList.add('challenge-section');
    // let challengeBackground = doc.createElement('div');
    // challengeBackground.classList.add('challenge-background');
    // gridRow2.setAttribute('id', 'grid-row-2');
    // gridRow2.classList.add('flex-container', 'proj-grid', 'challenge-flex');

    // let projGrid = doc.createElement('div');
    projGrid.setAttribute('id', 'proj-grid-container');
    projGrid.classList.add('content-block');

    projGrid.appendChild(generateGridBlock("overview"));
    projGrid.appendChild(generateGridBlock("role"));
    // gridRow2.appendChild(generateGridBlock("img"));
    // gridRow2.appendChild(generateGridBlock("challenge"));
    // challengeSection.appendChild(challengeBackground);
    // challengeSection.appendChild(gridRow2);
    // projGrid.appendChild(challengeSection);
    gridSection.appendChild(projGrid);

    mainTag.appendChild(gridSection);
}


/* Challenge Grid Section */

function generateChallengeGridSection(mainTag) {
    let gridSection = doc.createElement('section');
    gridSection.setAttribute('id','challenge-grid-section');
    gridSection.classList.add('challenge-section');
    // gridSection.classList.add('blue-section');
    

    let challengeGrid = doc.createElement('div');
    challengeGrid.setAttribute('id', 'challenge-grid');
    challengeGrid.classList.add('flex-container', 'content-block', 'proj-grid', 'challenge-flex');
    challengeGrid.appendChild(generateGridBlock("img"));
    challengeGrid.appendChild(generateGridBlock("challenge"));

    gridSection.appendChild(challengeGrid);
    mainTag.appendChild(gridSection);

}


function generateGridBlock(gTitle) {
    let gridBlock = doc.createElement('div');
    gridBlock.classList.add('proj-grid-block');

    gridBlock.classList.add('flex-item');

    if (gTitle != "img") {
        let gridTitleBlock = doc.createElement('div');
        gridTitleBlock.classList.add('section-title');

        let blockTitle = doc.createElement('h3');
        blockTitle.innerHTML = gTitle.charAt(0).toUpperCase() + gTitle.slice(1);
        
        gridTitleBlock.appendChild(blockTitle);
        gridBlock.appendChild(gridTitleBlock);
        
        let blockDescr = doc.createElement('div');
        blockDescr.innerHTML = projectObj[gTitle];

        gridBlock.appendChild(blockDescr);
    }
    else {
        gridBlock.classList.add('crop-img', 'grid-img');
        gridBlock.innerHTML = '<img src="./img/projects/' + imageCollectionSrc + '/challenge.png" alt=""></img>';
    }


    return gridBlock;

}


/* Process Section */

function generateProcessSection(mainTag){
    let processSection = doc.createElement('section');
    processSection.setAttribute('id','process-section');

    let processBlock = doc.createElement('div');
    processBlock.classList.add('content-block');

    let sectionTitle = doc.createElement('div');
    sectionTitle.classList.add('section-title', 'process-text');
    sectionTitle.innerHTML = "<h1>Process</h1>";

    processBlock.appendChild(sectionTitle);
    generateProcessBody(processBlock);

    processSection.appendChild(processBlock);
    mainTag.appendChild(processSection);
}


function generateProcessBody(processBlock) {

    let processIntro = doc.createElement('div');
    let processBanner = doc.createElement('div');
    let processBody = doc.createElement('div');
    let processBullets = doc.createElement('div');
    let processConclusion = doc.createElement('div');

    processIntro.classList.add('process-text');
    processBanner.classList.add('crop-img', 'process-img');
    processBody.classList.add('process-text');
    processBullets.classList.add('process-text', 'process-bullet');
    processConclusion.classList.add('process-text');

    processIntro.innerHTML = projectObj['process']['processIntro'];
    processBanner.innerHTML = '<img src="./img/projects/' + imageCollectionSrc + '/process.png" alt=""></img>';
    processBody.innerHTML = projectObj['process']['processBody'];
    processBullets.appendChild(generateProcessBullets());
    processConclusion.innerHTML = projectObj['process']['processConclusion'];

    processBlock.appendChild(processIntro);
    processBlock.appendChild(processBanner);
    processBlock.appendChild(processBody);
    processBlock.appendChild(processBullets);
    processBlock.appendChild(processConclusion);
}

function generateProcessBullets() {
    let procBulletsList = projectObj['process']['processBullets'];
    console.log(procBulletsList);
    let procBulletsUL = doc.createElement('ul');
    for(let i=0; i < procBulletsList.length; i++) {
        let bulletPoint = doc.createElement('li');
        bulletPoint.innerHTML = procBulletsList[i];
        console.log(bulletPoint);
        procBulletsUL.appendChild(bulletPoint);
    }

    return procBulletsUL;
}



/* Conclusion Section */

function generateConclusionSection(mainTag) {
    
    let conclusionSection = doc.createElement('section');
    conclusionSection.setAttribute('id','conclusion-section');
    conclusionSection.classList.add('light-section');

    let conclusionBlock = doc.createElement('div');
    conclusionBlock.classList.add('content-block', 'center-text', 'conclusion-block');

    let sectionTitle = doc.createElement('div');
    sectionTitle.classList.add('section-title');
    sectionTitle.innerHTML = "<h3>Conclusion</h3>";

    let conclusionText = doc.createElement('div');
    conclusionText.classList.add('content-block', 'conclusion-text');
    conclusionText.innerHTML = projectObj['conclusion'];



    conclusionBlock.appendChild(sectionTitle);
    conclusionBlock.appendChild(conclusionText);

    
    conclusionSection.appendChild(conclusionBlock);
    mainTag.appendChild(conclusionSection);
}



initializeMain();