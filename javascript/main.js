
// change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0); // 10 is for px value. If you scroll 10px it will activate
})