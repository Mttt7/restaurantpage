import tomatosoup from './images/tomatosoup.jpg'
import polishdinner from './images/polishdinner.jpg'
import pizzatopia from './images/pizzatopia.jpg'
import zygi from './images/zygi.jpg'

const TomatoSoupImg = new Image()
const PolishDinnerImg = new Image()
const PizzatopiaImg = new Image()
const ZygiImg = new Image()

TomatoSoupImg.src = tomatosoup
PolishDinnerImg.src = polishdinner
PizzatopiaImg.src = pizzatopia
ZygiImg.src = zygi



 function drawMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
    const menuWrapper = document.createElement('div')
    menuWrapper.classList.add('menu-wrapper')
    
        const TomatoSoup = new Dish(TomatoSoupImg,'Tomato Soup','Lovely delicious traditional polish tomato soup made from fresh tomatoes served with home made noodles. You are gonna love it',8.50) 
        const PolishDinner = new Dish(PolishDinnerImg,'Polish de volaille ',"Our Polish De volaille with home made fries is a must-try dish at our restaurant. Slow-cooked poultry is served  with vegetables and spices, and paired with home made fries.",29) 
        const Pizzatopia = new Dish(PizzatopiaImg,'Pizza','Try our delicious Italian pizza, made with a crispy crust and topped with the freshest ingredients. Our pizza is sure to satisfy your craving for something savory and delicious. Come and enjoy a slice at our restaurant!',34.0) 
        const Zygi = new Dish(ZygiImg,'Student dish','If you are hungry brokie or just a student. It doesnt taste good. It is not fresh. Cheap.',7.0) 
        
        let dania = [TomatoSoup,PolishDinner,Pizzatopia,Zygi]

        for(let i=0;i<dania.length;i++){
            const dish = document.createElement('div')
            dish.classList.add("dish")

                const name = document.createElement("div")
                    name.classList.add("name")    
                    name.textContent = dania[i].name
                    dish.appendChild(name)
                    

                const photo = document.createElement("img")
                    photo.classList.add("photo")
                    photo.src = dania[i].photo.src
                    dish.appendChild(photo)

                const description = document.createElement("div")
                    description.classList.add("description")
                    description.textContent = dania[i].description
                    dish.appendChild(description)

                const price = document.createElement("div")
                    price.classList.add("price")
                    price.textContent = dania[i].price
                    dish.appendChild(price)
                
                    
            menu.appendChild(dish)
            

        }



        menuWrapper.appendChild(menu)
        return menuWrapper
}


class Dish{
    constructor(dishPhoto,dishName,dishDescription,dishPrice){
        this._photo = dishPhoto
        this._name = dishName
        this._description = dishDescription
        this._price = dishPrice
    }

    get photo() {return this._photo}
    get name() {return this._name}
    get description() {return this._description}
    get price() {return this._price}





}

export default function loadMenu(){
    const main = document.querySelector("#main")
    main.textContent=''
    main.appendChild(drawMenu())
    
}