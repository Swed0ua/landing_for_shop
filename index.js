let popupClose = document.querySelector('.popup__close');
let popupOpen = document.querySelectorAll('.popup__open');
let popup = document.querySelector('.popup');
let switchClass = '_active';
let popupEclipse = document.querySelector('.popup__eclipse');
let HTML = document.querySelector('html');
let arr = [popupEclipse, popup, HTML];
let header = document.querySelector('header');
let ourWorksItemArr = document.querySelectorAll('.our-works__title');

let scrollToUp = 0;

popupClose.addEventListener('click', () => {
    arr.forEach(e => {
        e.classList.remove(switchClass);
    })
})

popupOpen.forEach(e => {
    e.addEventListener('click', ()=>{
        arr.forEach(e => {
            e.classList.add(switchClass);
        })
    })
})

window.addEventListener('scroll', headerSize);

function headerSize () {
    scrollToUp = window.scrollY;
    if (scrollToUp > 200){
        header.classList.add(switchClass)
    } else {
        header.classList.remove(switchClass)
    }
}

ourWorksItemArr.forEach(element=>{
    element.addEventListener('click', (event)=>{
        console.log(element, event);
        event.path[2].classList.toggle(switchClass);
    })
})