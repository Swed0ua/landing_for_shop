let popupClose = document.querySelectorAll('.popup__close');
let popupOpen = document.querySelectorAll('.popup__open');
let popup = document.querySelector('.popup__form');
let popupIMG = document.querySelector('.popup__img')
let switchClass = '_active';
let popupEclipse = document.querySelector('.popup__eclipse');
let HTML = document.querySelector('html');
let arr = [popupEclipse,popup, HTML];
let header = document.querySelector('header');
let ourWorksItemArr = document.querySelectorAll('.our-works__title');
let ItemsWorks = document.querySelectorAll('.our-works__item');

let scrollToUp = 0;

popupClose.forEach(element => {
    element.addEventListener('click', () => {
        arr.forEach(e => {
            e.classList.remove(switchClass);
        })
        popupIMG.classList.remove(switchClass)
    })
})

popupOpen.forEach(e => {
    e.addEventListener('click', ()=>{
        arr.forEach(e => {
            e.classList.add(switchClass);
        })
    })
})

ItemsWorks.forEach(e => {
    e.addEventListener('click', (event)=>{
        popupIMG.classList.add(switchClass)
        HTML.classList.add(switchClass)
        popupEclipse.classList.add(switchClass)
        console.log(e, event);
        openImgInPopup(event.path[1].children[0])
    })
})

function openImgInPopup (img) {
    //popupIMG.innerHTML = img
    popupIMG.querySelector('img').src = img.src;
    console.log(img)
}

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
        event.path[2].classList.toggle(switchClass);
    })
})