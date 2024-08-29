const header = document.getElementById(`header`)
const headerIcons = [...document.querySelectorAll(`.header .bi`)]
const overlay = document.getElementById(`overlay-container`)
const closeX = document.getElementById(`close-modal-icon`)
const menuList = [...document.querySelectorAll(`.list-container p`)]
//Hover Effect to the header icons + Menu overlay display
headerIcons.forEach(icon=>{
    icon.addEventListener(`mouseenter`, function() {
            this.style.color = `#D49E72`
            this.style.transition = `color 0.3s ease`
    })
    icon.addEventListener(`mouseleave`, function() {
            this.style.color = `aliceblue`
        })
    
    if (icon.classList.contains(`bi-list`)) {
        icon.addEventListener(`click`, function () {
            if (overlay.classList.contains(`overlay-hide`)) {
                overlay.classList.replace(`overlay-hide`, `overlay-container`)
                overlay.style.transition = `opacity 5s ease`
              }
        })
        
    }
})

//closing menu overlay
closeX.addEventListener(`click`, resetAll)
overlay.addEventListener(`click`, resetAll)
function resetAll() {
    if (overlay.classList.contains(`overlay-container`)) {
        overlay.classList.replace(`overlay-container`, `overlay-hide`)        
    }
}

//click action on menu list displayed on overlay 
menuList.forEach(listItem=>{
    listItem.addEventListener(`click`, (event)=>{
      let click = event.target
      let clickAction = click.dataset.action
      if (clickAction === `home`) {
        window.location.href = "index.html"
      }else if (clickAction === `projects`) {
        window.location.href = "project.html"
      }else if(clickAction === `about`){
        window.location.href = "about.html"
      }else if(clickAction ===`contact`){
        window.location.href = "contact.html"
      }else if(clickAction === `services`){
        window.location.href = "services.html"
      }
        resetAll()
    })

    window.addEventListener("popstate", (event) => {
      // Do whatever you want when user navigates back
      window.history.back
  })
})

//HOVER
const imageCont = [...document.querySelectorAll(`.img`)]
const rightCont = document.getElementById(`right-content`)


imageCont.forEach(image =>{
  const nextImage = image.nextElementSibling || image.previousElementSibling
  image.addEventListener(`mouseover`, () =>{
          image.style.transform = `scale(1.1)`
          nextImage.style.transform = `scale(0.9)`
    })
    

  image.addEventListener(`mouseout`, () =>{
          image.style.transform = `scale(1)`
          nextImage.style.transform = `scale(1)`
  })
})

/*const firstImage = document.querySelector('.first-image');
const secondImage = document.querySelector('.second-image');

secondImage.addEventListener(`mouseover`, () =>{
  firstImage.style.transform = `scale(0.8)`
  secondImage.style.transform = `scale(1.2)`
})

secondImage.addEventListener(`mouseout`, () =>{
  firstImage.style.transform = `scale(1)`
  secondImage.style.transform = `scale(1)`
})*/

/*menuNodeList.forEach(fly=>{
    fly.addEventListener(`click`, (event)=>{
      let userTarget = event.target
      if (userTarget.classList.contains(`vp`)) {
        if (overlay.classList.contains(`overlay-hide`)) {
          overlay.classList.replace(`overlay-hide`, `overlay-container`)
          titleMsg.textContent = `User Profile`
          emptyCont.innerHTML = " "
        resetAll()
        }
      }
  
      else if (userTarget.classList.contains(`msg`)) {
        if (overlay.classList.contains(`overlay-hide`)) {
          overlay.classList.replace(`overlay-hide`, `overlay-container`)
          emptyCont.innerHTML = " "
          titleMsg.textContent = `Message`
  
          let textArea = document.createElement(`textarea`)
          textArea.classList.add(`textarea`)
          textArea.placeholder = `Hey`
  
          let sendButton = document.createElement(`button`)
          sendButton.classList.add(`form-button`)
          sendButton.textContent = `Send`
  
          emptyCont.append(textArea, sendButton)
         resetAll()
        }   
      }
      
    })
    
  })
*/