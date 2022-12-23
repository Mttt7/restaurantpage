import './style.css'
import drawHome from './home.js'
import drawMenu from './menu.js'
import drawContact from './contact.js'

console.log("Its working!")

function component(){
    
    //return drawHome()
    //return drawMenu()
    return drawContact()
}
const content = document.querySelector("#content")
content.appendChild(component())
