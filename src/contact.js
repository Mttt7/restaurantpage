
export default function drawContact(){

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    
        const greetings = document.createElement('div')
        greetings.classList.add('greetings')
        greetings.textContent = "See you at"
        wrapper.appendChild(greetings)

        const showMapBtn = document.createElement('button')
        showMapBtn.textContent = "SHOW MAP"
        showMapBtn.classList.add("button")
        wrapper.appendChild(showMapBtn)

        showMapBtn.addEventListener('click',()=>{
            map.classList.remove("map-inv")
            map.classList.add("map")
        })

        const mapWrapper = document.createElement('div')
        wrapper.appendChild(mapWrapper)
        mapWrapper.classList.add("map-wrapper")
        
            const map = document.createElement('iframe')
            map.classList.add("map-inv")
            map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1489.6692502524713!2d21.945400000000014!3d51.437958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x253c7dae50e5b69f!2zNTHCsDI2JzE2LjciTiAyMcKwNTYnNDMuNCJF!5e1!3m2!1spl!2spl!4v1671818182255!5m2!1spl!2spl" 
            mapWrapper.appendChild(map)
        




        
        const number = document.createElement('div')
        number.textContent="+48 501 420 690"
        number.classList.add('number')
        wrapper.appendChild(number)

        const mail = document.createElement('div')
        mail.textContent= "mwcousine@restaurant.com"
        mail.classList.add('mail')
        wrapper.appendChild(mail)


    return wrapper
}