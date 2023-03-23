# Show-more-show-less
Expanding text filed on button click and minimizing it back. Button color also changes.

## HTML + CSS + JavaScript

1. Initial textbox (class='box') has size of 300x240 px. This size can be changed on lines 36-37 of style.css file:

 36   width: 300px;
 37   height: 240px;

There is a button "read more" (styled as an underlined text) below textbox. Initial button colors can be changes in lines 59-60 of styles.css:

58  button > span {
59     color: #ff4400;
60      font-weight: bold;
61  }

Initial variable isOpened value is setup as 'false'. isOpened works as a toggle switch between 'read more' and 'show less' rules set.

2. Initial JvaScript setup makes textbox height to be equal to clientHeight and scrollTop = 0 - lines 31 and 32 of script.js file:

 31       box.style.height = box.clientHeight + 'px';
 32       box.scrollTop = 0;

3. ![image](https://user-images.githubusercontent.com/113363158/227131326-66789b9d-530d-4d32-98e7-c8779602d75d.png)

4. Clicking "read more" button textbox expands, showing more text lines. "if" set of rules works:

13       if(!isOpened) {
14              box.style.height = box.scrollHeight + 'px'; //set textbox height equal to scrollHeight
15              console.log(box.scrollHeight);
16              button.style.top = 658 + 'px'; //button moves down (check actual scrollHeight before using console.log(box.scrollHeight) value from line 15)
17              btn.textContent = 'show less'; //button text changes to 'show less'
18              btn.style.color = '#87cefa'; //button text changes to 'lightblue'
19              isOpened = true;  //toggle to "else if" branch

Button changes to "show less" and becomes lightblue.
Button click also changes variable isOpened to true. 

5. Clicking "show less" button textbox and button returns to it's initial state:

20            } else if(isOpened) {
21              box.style.height = 238 + 'px'; set textbox height equal to initial textbox height
22              btn.textContent = 'read more'; //button text changes to 'read more'
23              button.style.top = 290 + 'px'; //button moves up
24              btn.style.color = '#ff4400';  //button text changes to 'darkorange'
25              isOpened = false; //toggle to "if" branch
26          }

6.

Color change is being managed in JavaScript as you can see. Can be adjusted directly in script.js file:

18                btn.style.color = '#87cefa'; //'show less' color

24                btn.style.color = '#ff4400'; //'read more' color

