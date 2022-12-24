import mapa from './images/mapa.png'
 
    const Mapa = new Image()
    Mapa.src = mapa
    Mapa.classList.add("map-inv")
 function drawContact(){

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    
        const greetings = document.createElement('div')
        greetings.classList.add('greetings')
        greetings.textContent = "See you at"
        wrapper.appendChild(greetings)
        Mapa.classList.add("map")
        //const showMapBtn = document.createElement('button')
        // showMapBtn.textContent = "SHOW MAP"
        // showMapBtn.classList.add("button")
        //wrapper.appendChild(showMapBtn)

        // showMapBtn.addEventListener('click',()=>{
        //     Mapa.classList.remove("map-inv")
        //     Mapa.classList.add("map")
        // })

        const mapWrapper = document.createElement('div')
        wrapper.appendChild(mapWrapper)
        mapWrapper.classList.add("map-wrapper")
        
            
            mapWrapper.appendChild(Mapa)
        




        
        const number = document.createElement('div')
        number.textContent="+48 501 420 690"
        number.classList.add('number')
        wrapper.appendChild(number)

        const mail = document.createElement('div')
        mail.textContent= "mtcousine@restaurant.com"
        mail.classList.add('mail')
        wrapper.appendChild(mail)


    return wrapper
}

export default function loadContact(){
    const main = document.querySelector("#main")
    main.textContent=''
    main.appendChild(drawContact())
}

