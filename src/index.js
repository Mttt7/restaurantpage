import './style.css'
import drawHome from './home.js'
import drawMenu from './menu.js'

console.log("Its working!")

function component(){
    
    //return drawHome()
    return drawMenu()
}
const content = document.querySelector("#content")
content.appendChild(component())
