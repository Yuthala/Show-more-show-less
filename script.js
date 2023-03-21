let box = document.querySelector('.box'),
    btnMore = document.querySelector('.more'),
    btnLess = document.querySelector('.less'),
    width = box.clientWidth,
    height = box.clientHeight,
    isOpened = false;

initialSetup();

btnMore.addEventListener('click', function() {
    if(!isOpened) {
        box.style.height = box.scrollHeight + 'px';
        console.log(box.scrollHeight);
        isOpened = true;
        btnMore.classList.add('invisible');
        btnLess.classList.remove('invisible');
    } else if(isOpened) {
        box.style.height = 240 + 'px';
        isOpened = false;
        //btnMore.classList.remove('invisible');
        //btnLess.classList.add('invisible');
    }
}); 

function initialSetup() {
    box.style.height = 240 + 'px';
    box.scrollTop = 0;
    btnLess.classList.add('invisible');
}