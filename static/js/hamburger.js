const hamburgerButton = document.getElementById('hamburger');
const innerHamburgerButton = document.getElementById('inner-hamburger');

const hamburgerHandler = () => {
    hamburgerButton.classList.toggle('opened');
};

hamburgerButton.addEventListener('click', hamburgerHandler);
innerHamburgerButton.addEventListener('click', hamburgerHandler);
