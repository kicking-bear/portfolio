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
        <div class="content-block proj-title"></div>\
        </div>\
    </div>';

const mainData =
{
    "projects":
    [
        /** Salamone **/
        {
            "title": "Salamone",
            
            "overview": 
                `Bryan L. Salamone & Associates P.C. is a high profile client for Martindale-Hubbell. They requested a refresh of their site based on a change in philosophy and newly adopted business language.<br>
                <br>
                The law firm has become a mainstay in Long Island, NY so they wanted their new site to reflect a more established business.<br>
                <br>
                They also wanted to move away from aggressive imagery and content to amicable.`,
            "role": 
                `<strong>Lead Designer</strong><br>
                <br>
                UX Design, Visual Design`,
            "challenge": 
                `This site was designed to be completely custom. I needed to create a site that reflected the company's new vision as well as implement some good UX practices that were missing from the old design.<br>
                <br>
                Navigation was busy, sections within the site were not clearly dilineated, and pricing was not readily transparent.<br>
                <br>
                I was tasked with designing the new site from the ground up and to incorporate some core components from the old one.`,
            
            "process": 
            {
                "processIntro": 
                    `We started with a design prompt and critique of Salamone's old site.`,
                "processBody": 
                    `The team then came up with three designs from three separate designers. Out of the three, my design was selected from a presentation meeting with Bryan L. Salamone.<br>
                    <br>
                    Our designs were guided by the client's needs and requests:`,
                "processBullets":
                [
                    `Transparency with pricing (a focus on the contested divorce package)`,
                    `Highlight the pricing, almost no divorce attorney in Long Island, NY offers the rates his firm offers`,
                    `Shift from language and imagery that's aggressive, and instead focus on amicable guidance through the legal process`,
                    `Move from "singular attorney" to "established legal team"`
                ],
                "processConclusion": 
                    `My design went through several rounds of revisions before passing off to the developers to build.<br>
                    <br>
                    Every design choice had to be purposeful. This project is one of the few we do this directly with clients and Bryan L. Salamone in particular is very thorough.`
            },
            
            "conclusion": 
                `The design was a lot of fun to do. The developers had little to no issue or questions with the design either. The only real challenge was adjusting the pricing section to be responsive, but I believe I found an elegant solution for this too.<br>
                <br>
                I believe the final result is a cleaner, more inviting, and interesting websit refresh.`,
            "projectLink": `https://www.figma.com/file/B6r2sCxnZG2DH82Mvf6YTK/Salamone-2022-Redesign?node-id=80%3A2`
        },

        /** Logo Module **/
        {
            "title": "Logo Module",
            
            "overview": 
                `Internet Brands proprietary website builder WebManager, underwent a complete overhaul in 2020. This 2.0 version required a rework of many of the main core components and modules.<br>
                <br>
                There was push to make the settings more user-friendly.<br>
                <br>
                I was in charge of leading a design change for the logo module. We needed a way to test the resizing option and so I created the prototype, drafted the questionnaire, and led the UX research for this project.`,
            "role": 
                `<strong>Lead Designer</strong><br>
                <br>
                UX Design, Research, Interaction, Visual Design, Prototyping & Testing`,
            "challenge": 
                `The main challenge with this project were the limitations with WebManager itself.  We were constrained with what we could actually change.<br>
                <br>
                One of the main issues with the logo module is the inability to ”preview”. We found that users struggled with understanding how large or small their logo would look on the site.<br>
                <br>
                We also wanted to provide a way for users to resize their logo through the site instead of having to reupload a new image that had been cropped or resized externally.`,
            
            "process": 
            {
                "processIntro": 
                    `The process for running this test was to first identify the the needs of the user. I shaped our testing questions and prompts to gain insight on how users were interacting with proposal for new features to resize the logo on the site directly.`,
                "processBody": 
                    `We wanted to move away from language involving pixels and try to focus on indicators that are more generalized. We experimented with sliders and percentages.<br>
                    <br>
                    The process of linking a prototype of this scale took quite a while. I had to account for so many different options. I designed the prototype based on user personas created with traits and common needs our client-base.<br>
                    <br>
                    I drafted the questionaire and recruited people from around the office, from all different departments, to do conduct our tests over Google Hangouts with the use of screenshare.<br>
                    <br>
                    Our team was mainly concerned with three things:`,
                "processBullets":
                [
                    `How are users interacting with the module?`,
                    `How are they understanding the “resizing” tools and features?`,
                    `What are their first impressions of our proposed featureset?`
                ],
                "processConclusion": 
                    `You can see a copy of the template questionnaire <a href="./data/User Test Script [Template].pdf">here</a>.`
            },
            
            "conclusion": 
                `Difficulty and success rates remained pretty consistent between the two main options: slider and percentage input. There was also an even preference for both, with three testers siding with each of the two resizing options.<br>
                <br>
                We were surprised that time to complete a task, didn't necessarily relate to familiarity with WebManager. It seems that clients who have experience with other site building tools: Wix, Wordpress, Squarespace, were often able to complete the task faster. This is consistent with Jakob's Law.<br>
                <br>
                In a meeting with the developers we discussed our findings and the difficulties with implementing some of our proposals.<br>
                <br>
                We came to a compromise based on these findings to simplify the options and make them more visible within the first click.`
                ,
            "projectLink": `https://www.figma.com/proto/YdGJEojNrxnXVvYz5w4Bcw/Logo-Module-Prototype?page-id=0%3A1&node-id=46%3A1674&viewport=117%2C402%2C0.06&scaling=min-zoom&starting-point-node-id=46%3A1674`
        },
        
        /** Market Your Firm **/
        {
            "title": "Market Your Firm",
            
            "overview": 
                `Market Your Firm is one of Martindale-Hubbell's front facing business sites.<br>
                <br>
                The original layout of the website (and still current layout) is arguably choppy and unclear. Stakeholders and project managers wanted a redesign that clearly showed product offerings with simplified navigation.<br>
                <br>
                My design was selected as the favorite but developer priority to build it out eventually faded. This was the first of many projects I would come to work on at Martindale-Hubbell.`,
            "role": 
                `<strong>Lead Designer</strong><br>
                <br>
                UX Design, Visual Design`,
            "challenge": 
                `The main challenge of this design was defining the sites purpose and communicating this to users.<br>
                <br>
                In order to boost SEO there needs to be plenty of content, but this often runs into contradictions with good UX practices. Users should be able to navigate the site efficiently and while many don't consider blocks of text as UI, it still is an important element to overall layout.`,
            
            "process": 
            {
                "processIntro": 
                    `This design went through several rounds starting with wireframes and slowly building up different sections of the site.`,
                "processBody": 
                    `In the original design, I had carosel to help split up one of the sections and to hide extraneous information. The site has too much cluttered information.<br>
                    <br>
                    This was a point of contention for a while. I learned that in meetings with stakeholders and project managers you have to be flexible and build off of pushback.<br>
                    <br>
                    In the end I was able to break up the information more consistently and with the feedback, create a better designs.<br>
                    <br>
                    Now product offerings were more clear and transparent on the homepage. The featured blocks just below the banner also help with user navigation.<br>
                    <br>
                    We had to consider our user base for this site - Lawyers that are looking for ways to boost their online presence. Our main demographic are usually older in age, with minimal essential computer experience.<br>
                    <br>
                    The site was redesigned to cater to this audience as well as reflect a more cohesive product and information offering.`,
                "processBullets":
                [],
                "processConclusion": 
                    ``
            },
            
            "conclusion": 
                `The design was approved all the way to until it was going to be built. The project ultimately fell to the bottom of a larger priority list with plans to come back to it.<br>
                <br>
                This was one of my first projects at Martindale-Hubbell and regardless of anything, I was proud of what I created and more importantly, grateful I got to experience the process.`,
            "projectLink": `https://www.figma.com/proto/QqtEiH6pFBaVaBaq9npUWR/Market-Your-Firm-Redesign?page-id=260%3A66&node-id=260%3A67&viewport=1403%2C1953%2C0.5&scaling=min-zoom&starting-point-node-id=260%3A67&show-proto-sidebar=1`
        },
        
        /** Captorra Banner Animation **/
        {
            "title": "Captorra Banner Animation",
            
            "overview": 
                `Captorra is one of the larger businesses falling under Martindale-Hubbell's umbrella. Captorra is an intake and lead management system for lawyers and firms.<br>
                <br>
                Arguably the most essential part of a law firm's practice is generating leads, and not just leads, but quality ones.<br>
                <br>
                This redesign was coming at the surge of the pandemic and they wanted a full rebrand of their logo and site.<br>
                <br>
                My colleague created a fantastic design for both the site and the logo.<br>
                <br>
                Along with the refresh they wanted the site to capture attention, so they began proposing web animations. Something that the company has never ventured before.`,
            "role": 
                `<strong>Motion Designer</strong><br>
                <br>
                Motion Designer`,
            "challenge": 
                `Balancing web animations with good UX design becomes very delicate fast. Things like site speed or user retention, tend to take a hit when a site goes overboard with animations.<br>
                <br>
                Animations for button and interactive elements are generally safe but I was tasked with creating an animation for something purely aesthetic.`,
            
            "process": 
            {
                "processIntro": 
                    `I started with some competitive research. One of the main challenges with this section was my inexperience. Before this project I had little to no experience with animation before. Especially on the web.`,
                "processBody": 
                    `We have a talented group of developers on our team and I'm sure they could create whatever I designed but I knew the scale of priority would shift the more the developers would actually have to do.<br>
                    <br>
                    Before Lottie became as popular as it is now, I followed a YouTube tutorial on how to export After Effects animations to usable code.<br>
                    <br>
                    After playing around with different designs, I landed on three key design criteria for myself:`,
                "processBullets":
                [
                    `Animation has to be quick`,
                    `Visually simplified`,
                    `Has to serve a purpose`
                ],
                "processConclusion": 
                    `I ended up creating an animation for the icons, Captorra, wanted to implement. The animation would be at the top to draw visitors of the site and give them quick visual information about the site, the business, and what they're offering.<br>
                    <br>
                    Creating an animation through Lottie ended up being the right choice because it made it much easier for the developers to tweak and to implement on the actual site.`
            },
            
            "conclusion": 
                `Since this project I've had a lot more time to experiment with animation in After Effects. I've also moved onto projects at Internet Brands to incorporate basic animations to the website builder itself WebManager.`,
            "projectLink": `https://www.captorra.com/`
        },
    ]
}; 

function initializeMain() {
    doc = document;
    domParser = new DOMParser();
    let fetchedTitle = fetchTitle();
    doc.title = fetchedTitle.replaceAll('-', ' ');
    projectObj = mainData['projects'].find(proj => proj.title == doc.title);

    imageCollectionSrc = fetchedTitle.toLowerCase();

    generateBanner(doc.getElementById('title-section'));

    let mainTag = doc.getElementsByTagName('main')[0]
    generateOverviewGridSection(mainTag);
    generateChallengeGridSection(mainTag);
    generateProcessSection(mainTag);
    generateConclusionSection(mainTag);
    generateProjectLink(mainTag);
}

function fetchTitle(){
    let pageURL = window.location.search;
    let pageParams = new URLSearchParams(pageURL);
    let fetchedTitle = pageParams.get('project-name');

    return fetchedTitle;
}



/* Banner Section */

function generateBanner(titleSection) {
    
    let bannerBlock = domParser.parseFromString(bannerTemplate, "text/html").body.getElementsByClassName('project-banner')[0];
    bannerBlock.getElementsByClassName('proj-title')[0].innerHTML = doc.title;

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

    projGrid.setAttribute('id', 'proj-grid-container');
    projGrid.classList.add('content-block');

    projGrid.appendChild(generateGridBlock("overview"));
    projGrid.appendChild(generateGridBlock("role"));
    
    gridSection.appendChild(projGrid);

    mainTag.appendChild(gridSection);
}


/* Challenge Grid Section */

function generateChallengeGridSection(mainTag) {
    let gridSection = doc.createElement('section');
    gridSection.setAttribute('id','challenge-grid-section');
    gridSection.classList.add('challenge-section');
    

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
    processBullets.classList.add('process-text', 'process-bullets');
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
    let procBulletsUL = doc.createElement('ul');
    for(let i=0; i < procBulletsList.length; i++) {
        let bulletPoint = doc.createElement('li');
        bulletPoint.innerHTML = procBulletsList[i];
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
    conclusionBlock.classList.add('content-block');

    let sectionTitle = doc.createElement('div');
    sectionTitle.classList.add('section-title');
    sectionTitle.innerHTML = "<h3>Conclusion</h3>";

    let conclusionText = doc.createElement('div');
    conclusionText.classList.add('conclusion-text');
    conclusionText.innerHTML = projectObj['conclusion'];


    let projectLinkButton = generateProjectLink();


    conclusionBlock.appendChild(sectionTitle);
    conclusionBlock.appendChild(conclusionText);
    conclusionBlock.appendChild(projectLinkButton);

    
    conclusionSection.appendChild(conclusionBlock);
    mainTag.appendChild(conclusionSection);
}

function generateProjectLink() {
    let projectLinkBlock = doc.createElement('div');
    projectLinkBlock.classList.add('center-text');
    projectLinkBlock.innerHTML = `<button class="project-link-button" type="button"><h2>See the full project</h2></button>`;

    let projectLink = "window.open('" + projectObj['projectLink'] + "', '_blank').focus()";
    projectLinkBlock.getElementsByTagName('button')[0].setAttribute('onclick', projectLink);
    console.log(projectLinkBlock);

    return projectLinkBlock;
}



initializeMain();