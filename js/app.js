window.addEventListener('load', init)

let projects = [
    {
        name: "Cube Run",
        image: {
            banner: "./images/cube_run_banner.png",
            screenshot: "./images/game_screenshot.png"
        },
        description:    "The Unity game Cube Run is a side project made by myself (not a school project). The game where you play as a cube, you can jump and fly. The goal is to reach the end to unlock levels, but watch out for obstacles along your way!",
        tags: "Developing, Front-end and Back-end programming, Game Designing, Level Designing, Testing",
        url: { 
            demo: "https://youtu.be/j4cxqpAef8w",
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
        tags: "Conceptualize Serious Gaming, Programing Back-end Programing, Level Designing, Testing",
        url: { 
            demo: "https://youtu.be/ampxd0UnGoM",
            app: ""
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

    //project tags/tasks
    modalFooter = document.getElementById("modalFooter")
    modalFooter.innerText = `Tasks: ${projects[project].tags}`
    
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
        pDemo.href = project.url.demo
        pDemo.setAttribute('target', '_blank')
        pDemo.innerText = "Video"
        pDemo.classList.add('externalBtn')
        if(project.url.demo == ""){
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