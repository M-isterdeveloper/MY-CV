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


//send form 
    const forms = () => {
        const form = document.querySelector('.contact-form'),
              inputs = document.querySelectorAll('input'),
              blockBtn = document.querySelector('.contact-btn');

       const message = {
            loading: "Отправляем...",
            sucsses: 'Благодарю!',
            failure: "Что-то пошло не так" ,
            imgOK: "./image/messageOk.png"
       };     
    
       const postData = async (url, data) => {
            document.querySelector('.status-form').textContent = message.loading;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });
    
        return await res.text();
    
        };
        
    
        const clearInputs = () =>{ 
            inputs.forEach(item => {
                item.value = '';
            });
        };
    
        form.addEventListener('submit', (e) => {
                e.preventDefault();
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status-form');
                form.appendChild(statusMessage);

    
                const formDate = new FormData(form);
    
                postData('./server.php', formDate)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.sucsses;
                    })
                    .catch(() => statusMessage.textContent = message.failure)
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 3000);
                    })
            });
        };
        forms();

});

        
    
    



