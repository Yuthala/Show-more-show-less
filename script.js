let box = document.querySelector('.box'),
    btnMore = document.querySelector('.more'),
    btnLess = document.querySelector('.less'),
    height = box.clientHeight,
    isOpened = false;

initialSetup();

btnMore.addEventListener('click', function() {
    if(!isOpened) {
        box.style.height = box.scrollHeight + 'px';
        isOpened = true;
        btnMore.classList.add('invisible');
        btnLess.classList.remove('invisible');
        console.log(isOpened);
    } else if(isOpened) {
        box.style.height = 240 + 'px';
        btnMore.classList.remove('invisible');
        btnLess.classList.add('invisible');
        isOpened = false;
        console.log(isOpened);
    }
}); 

function initialSetup() {
    box.style.height = 240 + 'px';
    box.scrollTop = 0;
    btnLess.classList.add('invisible');
    isOpened = false;
}