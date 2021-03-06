// change background
function scrollHeader(){
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    // else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// servises modal

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.sevices__button'),
    modalClose = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
       modal(i) 
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', ()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})

// mixitup filter ortfolio

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

// link active work

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove(active-work))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))




// scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
              }else{
                  document.querySelector('.nav__menu a[href*' + sectionId + ']').classList.remove('active-link')
              }

    })
}
window.addEventListener('scroll', scrollActive)

// dark light theme
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectionIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if user previously chose a topic
if(selectedTheme){
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectionIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// activate / deactivate the theme manually with the buttton
themeButton.addEventListener('click', () => {
    //add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true

})
sr.reveal(`.home__data`)
sr.reveal(`.about__handle`, {delay: 700})
sr.reveal(`.about__social, .about__scroll`, {delay: 900})
sr.reveal(`.home__greeting, .home__type`, {delay: 900})
sr.reveal(`.contact__form, .contact__form-div`, {delay: 900})