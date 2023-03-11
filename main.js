const btnHamburger = document.querySelector('.btn-hamburger');

btnHamburger.addEventListener('click', () => {
    const isOpened = btnHamburger.getAttribute('aria-expanded');
    console.log(isOpened);
    if (isOpened === 'false') {
        btnHamburger.setAttribute('aria-expanded', 'true');
    } else {
        btnHamburger.setAttribute('aria-expanded', 'false');

    }
})