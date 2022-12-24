import './style.css'
import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'
import githubImg from './images/githublogo.png'
import igImg from './images/iglogo.png'

const GithubImg = new Image()
const IgImg = new Image()

GithubImg.src = githubImg
IgImg.src = igImg

function createHeader(){
    const header = document.createElement('div')
    header.classList.add('header')
    
        const logo = document.createElement('div')
        logo.classList.add('logo')
        logo.textContent = "MT 's    COUSINE"
        header.appendChild(logo)
    
        const chooseBar = document.createElement('div')
        chooseBar.classList.add('choose-bar')
        header.appendChild(chooseBar)
    
            const chHome = document.createElement('div')
            chHome.classList.add('choose-home')
            chHome.textContent = "HOME"
            chooseBar.appendChild(chHome)
            chHome.addEventListener('click',() => {
                loadHome()
            })
            
    
    
            const chMenu = document.createElement('div')
            chMenu.classList.add('choose-menu')
            chMenu.textContent = "MENU"
            chooseBar.appendChild(chMenu)
            chMenu.addEventListener('click',() => {
                loadMenu()
            })
    
            const chContact = document.createElement('div')
            chContact.classList.add('choose-contact')
            chContact.textContent = "CONTACT"
            chooseBar.appendChild(chContact)
            chContact.addEventListener('click',() => {
                loadContact()
            })
    
    return header
}

function createFooter(){
    
   



    const footer = document.createElement('div')
    footer.classList.add("footer")

        const info = document.createElement('div')
        info.textContent="Made by MT"
        footer.appendChild(info)

        const footerIcons = document.createElement('div')
        footerIcons.classList.add('footer-icons')
        footer.appendChild(footerIcons)
            footerIcons.appendChild(GithubImg)
            footerIcons.appendChild(IgImg)
                GithubImg.classList.add("github-icon")
                IgImg.classList.add("ig-icon")

                GithubImg.addEventListener('click',()=>{
                    window.open("https://github.com/Mttt7/restaurantpage","_self")
                })
                IgImg.addEventListener('click',()=>{
                    window.open("https://www.instagram.com/mtt.jpeg/","_self")
                })

                

    return footer
}

function createMain(){
const main = document.createElement('div')
main.classList.add("main")
main.id="main"
return main
}



const content = document.querySelector("#content")
function InitializeWebsite(){

    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())



    
}

InitializeWebsite()
loadHome()






//content.appendChild(createHeader())
//content.appendChild(component())
