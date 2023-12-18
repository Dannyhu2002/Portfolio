window.addEventListener('load', init)

let projects = [
    {
        name: "Reservervationsystem Wok'n Sushi",
        image: {
            banner: "./images/reservation_banner.png",
            screenshot: "./images/reservation_screenshot.png"
        },
        description:    "A vanilla full-stack based PHP CRUD system to make a table reservation for Wok 'N Sushi. Made in PHP with MySQL database.",
        tasks: "School assignment, Developing, Front-end & Back-end programming, Designing, Testing",
        url: { 
            showcase: "",
            app: ""
        }
    },
    {
        name: "The Bottled Curse",
        image: {
            banner: "./images/bottled_banner.png",
            screenshot: "./images/bottled_screenshot.png"
        },
        description:    "A 2D Typescript game made in Phaser. The goal: you are a pirate and end up on an island where you have to collect coins and defeat enemies to eventually catch your ship before it leaves.",
        tasks: "School team project, Developing, Front-end and Back-end programming, Game Designing, Level Designing, Testing",
        url: { 
            showcase: "https://youtu.be/cojcz-CY_TE?si=j89xWEjxgfe0SaTS",
            app: "https://thesas99.github.io/The-Bottled-Curse/"
        }
    },
    {
        name: "Laravel PHP CRUD System",
        image: {
            banner: "./images/laravel_banner.png",
            screenshot: "./images/laravel_screenshot.png"
        },
        description:    "A full-stack Laravel PHP CRUD System for food magazine. Made in Laravel PHP with MySQL database.  ",
        tasks: "School assignment, Developing, Front-end & Back-end programming",
        url: { 
            showcase: "",
            app: ""
        }
    },
    {
        name: "Notes full-stack React Webapp",
        image: {
            banner: "./images/notes_banner.png",
            screenshot: "./images/notes_screenshot.png"
        },
        description:    "A Full-stack React JS webapp for taking notes. Made in React Javascript wtih MongoDB database.",
        tasks: "School assignment, Developing, Front-end and Back-end programming",
        url: { 
            showcase: "",
            app: ""
        }
    },
    {
        name: "Uganda Unexplored",
        image: {
            banner: "./images/uganda_unexplored_banner.png",
            screenshot: "./images/uganda_unexplored_screenshot.png"
        },
        description:    "A 2nd year school team project in collaboration with Q42 as our client. The Unity game Uganda Unexplored is a serious game that highlights the cultural differences between western countries like The Netherlands and third-world countries like Uganda. The story is based on player's choices, so decide carefully what your outcome will be! ",
        tasks: "School team project, Conceptualize Serious Gaming, Front-end & Back-end Programing, Level Designing, Testing",
        url: { 
            showcase: "https://youtu.be/ampxd0UnGoM",
            app: ""
        }
    },
    {
        name: "Trash Predictor",
        image: {
            banner: "./images/trash_banner.png",
            screenshot: "./images/trash_screenshot.png"
        },
        description:    "A 2nd year school team project as a semi-start-up company where we focus on sustainability in Rotterdam. The app aims to reduce litter in Rotterdam through Artificial Intelligence. This app is made in Angular JS and Ionic with ML5 Machine Learning. ",
        tasks: "School team project, Prototyping, User Research, Developing, Front-end & Back-end Programing, Testing",
        url: { 
            showcase: "https://drive.google.com/file/d/1jf6tkDSCGG2kqdWRt2lZuABof-zzSxpm/view?usp=sharing",
            app: ""
        }
    },
    {
        name: "Boba Finder React Native app",
        image: {
            banner: "./images/boba_banner.png",
            screenshot: "./images/boba_screenshot.png"
        },
        description:    "A Expo React Native app to locate a couple of boba places around Rotterdam.",
        tasks: "School assignment, Developing, Front-end & Back-end programming",
        url: { 
            showcase: "",
            app: ""
        }
    },
    {
        name: "Lands of Magic Intern Project",
        image: {
            banner: "./images/lands_banner.png",
            screenshot: "./images/lands_screenshot.png"
        },
        description:    "A startup product that was still in beta at the time. It is a mobile game that is similar to a well-known mobile game called Clash of Clans. And as an intern I helped them to develop the mobile game.",
        tasks: "Internship project, Mobile Game developing, Front-end & Back-end Programing, Game Designing, Testing",
        url: { 
            showcase: "",
            app: "https://play.google.com/store/apps/details?id=com.CraftiPlays.UnityDevelopment&hl=en_US"
        }
    },
    {
        name: "Cube Run",
        image: {
            banner: "./images/cube_run_banner.png",
            screenshot: "./images/game_screenshot.png"
        },
        description:    "The Unity game Cube Run was first a side project made by myself and later on a school project. The game where you play as a cube, you can jump and fly. The goal is to reach the end to unlock new levels, but watch out for obstacles along your way!",
        tasks: "Hobby Project, School Project, Developing, Front-end and Back-end programming, Game Designing, Level Designing, Testing",
        url: { 
            showcase: "https://youtu.be/j4cxqpAef8w",
            app: "https://dannyhu2002.itch.io/cube-run-mobile-beta"
        }
    },
    {
        name: "Remobility IUXD Minor Project",
        image: {
            banner: "./images/minor_banner.png",
            screenshot: "./images/minor_screenshot.png"
        },
        description:    "A UX design minor school team project where we are assigned by Fox Connect to create an interface design for the IP-Car. The IP-Car is a remotely controllable toy car that offers people with disabilities (MS patients) the opportunity to experience the outdoors (such as parks, forests, beaches, etc.) again (with their loved ones) without all their wheelchair difficulties. In addition, a React Front-end web app is also developed to better link the interface design with the IP-Car.",
        tasks: "Minor team project, User Research, User Interface, User Experience, Creative technologies and Prototyping, Visual and Interaction Designing, Front-end Programming",
        url: { 
            showcase: "",
            app: "https://www.figma.com/proto/JlpotDCEhHfIYF6gLl9rZN/Team-Prime?type=design&node-id=1496-1846&t=XwHmxgzdXOcqJOnz-1&scaling=min-zoom&page-id=548%3A469&starting-point-node-id=1496%3A1903&show-proto-sidebar=1&mode=design"
        }
    }
]

//all sections
let homeSection = document.getElementById('homeSection')
let aboutSection = document.getElementById('aboutSection')
let skillsSection = document.getElementById('skillsSection')
let portfolioSection = document.getElementById('portfolioSection')

let portfolioCardsContainer = document.getElementById('portfolioCardsContainer')
let contentContainer = document.getElementById('contentContainer').children

let detailsBtn
let closeBtn
let modal = document.getElementById("modal")
let modalDescription
let modalTitle
let modalImg
let modalFooter

//initialize on load of webpage
function init(){
    createPortfolio()

    detailsBtn = document.getElementsByClassName("detailBtn")
    for (let i = 0; i < detailsBtn.length; i++){
        detailsBtn[i].addEventListener("click", () => showDetails(i))
    }
    
    //hide content when you click on btn-close
    closeBtn = document.getElementById("btn-close")
    closeBtn.addEventListener("click", () => hideContent())
}

//shows detail in a modal
function showDetails(project){
    // console.log(`${projects[project].name} card is clicked`)

    //project image
    modalImg = document.getElementById("modalImg")
    modalImg.src = projects[project].image.screenshot

    //project title
    modalTitle = document.getElementById("modalTitle")
    modalTitle.innerText = projects[project].name

    //project description
    modalDescription = document.getElementById("modalDescription")
    modalDescription.innerText = projects[project].description

    //project tasks
    modalFooter = document.getElementById("modalFooter")
    modalFooter.innerText = `Tasks: ${projects[project].tasks}`
    
    //content is default hidden, so add new class to display block
    modal.classList.add("notHidden")
}

//remobes the not hidden class to hide content
function hideContent(){
    modal.classList.remove("notHidden")
}

function createPortfolio(){

    for (let project of projects){
        //create cards
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('portfolioCards')

        //card body
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        //title of project
        let pName = document.createElement('h5')
        pName.classList.add('card-title')
        pName.innerText = project.name

        //project img banner
        let pImg = document.createElement('img')
        pImg.classList.add('card-img-top')
        pImg.src = project.image.banner

        let externalBtnDiv = document.createElement('div')
        // externalBtnDiv.classList.add('test')

        //details button
        let pDetail = document.createElement('a')
        pDetail.innerText = "Details"
        pDetail.classList.add('externalBtn')
        pDetail.classList.add('detailBtn')

        //link to demo vid
        let pDemo = document.createElement('a')
        pDemo.href = project.url.showcase
        pDemo.setAttribute('target', '_blank')
        pDemo.innerText = "Video"
        pDemo.classList.add('externalBtn')
        if(project.url.showcase == ""){
            pDemo.classList.add('hidden')
        }

        //link to app
        let pApp = document.createElement('a')
        pApp.href = project.url.app
        pApp.setAttribute('target', '_blank')
        pApp.innerText = "App"
        pApp.classList.add('externalBtn')
        if(project.url.app == ""){
            pApp.classList.add('hidden')
        }

        //append cards to parent
        portfolioCardsContainer.appendChild(card)
        card.appendChild(pImg)
        card.appendChild(cardBody)
        cardBody.appendChild(pName)
        cardBody.appendChild(externalBtnDiv)
        externalBtnDiv.appendChild(pDetail)
        externalBtnDiv.appendChild(pDemo)
        externalBtnDiv.appendChild(pApp)
    }
}

function changeContent(button_id){
    
    // console.log(button_id)

    for(let i = 0; i < contentContainer.length; i++){
        contentContainer[i].classList.add('hidden')
    }

    switch(button_id){
        case 'homeIcon' : homeSection.classList.remove('hidden') ; break ;
        case 'homeBtn' : homeSection.classList.remove('hidden') ; break ;
        case 'aboutBtn' : aboutSection.classList.remove('hidden') ; break ;
        case 'skillsBtn' : skillsSection.classList.remove('hidden') ; break ;
        case 'portfolioBtn' : portfolioSection.classList.remove('hidden') ; break ;
    }
}