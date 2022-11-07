const hamburgerButton = document.getElementById('hamburger');
const innerHamburgerButton = document.getElementById('inner-hamburger');
const overlay = document.getElementById('overlay');

console.log(overlay);

const hamburgerHandler = () => {
    hamburgerButton.classList.toggle('opened');
    overlay.classList.toggle('active');
};

hamburgerButton.addEventListener('click', hamburgerHandler);
innerHamburgerButton.addEventListener('click', hamburgerHandler);
