'use strict'
window.addEventListener('DOMContentLoaded', () => {
    const worksLinkLabel = document.querySelectorAll('.label-works');
    const workSpoiler = document.querySelector('.works-spoiler');
    const worksLabel = document.querySelector('.works-label');
    const textSpoiler = document.querySelector('.text-spoiler');
//функция открытия и закрытия выпадающего списка в портфолио
    function openWorksControl() {

        workSpoiler.addEventListener('click', () => {
            workSpoiler.classList.toggle('open');
            worksLabel.classList.toggle('open');

            for (let link of worksLinkLabel) {
                link.addEventListener('click', () => {
                    workSpoiler.classList.remove('open');
                    worksLabel.classList.remove('open');
                    textSpoiler.innerHTML = link.innerHTML;
                })
            }   
        });
    }
    openWorksControl();

    window.addEventListener("scroll", function () {
        let scroll = window.pageYOffset;
        let startParallax = document.querySelector('.header-parallax');
        startParallax.style.transform = "translate3d(0," + scroll / 30 + "rem, 0)"

    });
})


