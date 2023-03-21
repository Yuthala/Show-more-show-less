let textbox = document.querySelector('.textbox'),
    btn = document.querySelector('button'),
    width = textbox.clientWidth,
    height = textbox.clientHeight,
    isOpened = false;

console.log(textbox.getBoundingClientRect());
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

btn.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
    if(!isOpened) {
        textbox.style.height = textbox.scrollHeight + 'px';
        isOpened = true;
        console.log(isOpened);
    } else if(isOpened) {
        textbox.style.height = textbox.clientWidth + 'px';
        isOpened = false;
    }
}); 