import Breakfast from './images/breakfast.jpg'

 function drawHome(){
    //CONTAINER
    const container = document.createElement('div')
    container.classList.add("home-wrapper")
    

        //HERO IMG
        const heroImgWrapper = document.createElement('div')
        heroImgWrapper.classList.add('hero-img-wrapper')
        const heroImg = new Image()
        heroImg.src = Breakfast
        heroImg.classList.add("hero-img")
        container.appendChild(heroImgWrapper)
        heroImgWrapper.appendChild(heroImg)
        


        //CONTACT
        const contactDiv = document.createElement('div')
        contactDiv.classList.add("contact-wrapper")
        container.appendChild(contactDiv)

            //INVITATION
            const invitationDiv = document.createElement('div')
            invitationDiv.classList.add("invitation-wrapper")
            contactDiv.appendChild(invitationDiv)

                const invitationDivUpper = document.createElement('div')
                const invitationDivDown = document.createElement('div')
                invitationDiv.appendChild(invitationDivUpper)
                invitationDiv.appendChild(invitationDivDown)
                invitationDivUpper.classList.add("invitation-upper")
                invitationDivDown.classList.add("invitation-down")

                invitationDivUpper.textContent = "Order online..."
                invitationDivDown.textContent = "or visit us"

            //BUTTON
            const seeLocationBtn = document.createElement('button')
            seeLocationBtn.innerText="SEE LOCATION"
            contactDiv.appendChild(seeLocationBtn)
            seeLocationBtn.classList.add("button")



    console.log("home")
    return container
}

export default function loadHome(){
    const main = document.querySelector("#main")
    main.textContent=''
    main.appendChild(drawHome())
}
