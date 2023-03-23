window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let box = document.querySelector('.box'),
        btn = document.querySelector('button > span'),
        button = document.querySelector('button'),
        isOpened = false;

    initialSetup();

    btn.addEventListener('click', function() {
            if(!isOpened) {
                box.style.height = box.scrollHeight + 'px';
                console.log(box.scrollHeight);
                button.style.top = 658 + 'px';
                btn.textContent = 'show less';
                btn.style.color = '#87cefa';
                isOpened = true;  
            } else if(isOpened) {
                box.style.height = 238 + 'px';
                btn.textContent = 'read more';
                button.style.top = 290 + 'px';
                btn.style.color = '#ff4400';
                isOpened = false;
            }
    });


    function initialSetup() {
        box.style.height = box.clientHeight + 'px';
        box.scrollTop = 0;
    }
});