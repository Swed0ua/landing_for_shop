let popupClose = document.querySelector('.popup__close');
let popupOpen = document.querySelectorAll('.popup__open');
let popup = document.querySelector('.popup');
let switchClass = '_active';
let popupEclipse = document.querySelector('.popup__eclipse');
let HTML = document.querySelector('html');

popupClose.addEventListener('click', () => {
    popup.classList.remove(switchClass);
    popupEclipse.classList.remove(switchClass);
    HTML.classList.remove(switchClass);
})

popupOpen.forEach(e => {
    e.addEventListener('click', ()=>{
        popup.classList.add(switchClass);
        popupEclipse.classList.add(switchClass);
        HTML.classList.add(switchClass);
    })
})