/******************** variables ********************/

let back = document.getElementById("back")
let next = document.getElementById("next");
let display = document.getElementById("display");
const image_source = ["https://i.imgur.com/eNOyJW5.jpg", "images/pizza01.jpg" ,
    "https://i.imgur.com/BiC1HM8.jpg", "https://i.imgur.com/4X3jpxz.jpg"];
const length = image_source.length;
var curIndex = 1;

/******************** functions ********************/

function disable (button) {
    button.className = "disabled";
}

function able (button) {
    button.className = "";
}

var img = new Image();
img.onload = function() {
    i = document.getElementById('display');
    i.src = img.src;
    console.log('Image change')
};
img.src = image_source[curIndex]

function backupdate(event) {
    if (curIndex > 0) {
        if (curIndex === length - 1) {
            able(next);
        }
        curIndex -= 1;
        img.src = image_source[curIndex]
        display.src = "images/loading.gif";
        // display.src = image_source[curIndex];
        if (curIndex === 0) {
            disable(back);
        }
    }
}

function nextupdate(event) {
    if (curIndex < length - 1) {
        if (curIndex === 0) {
            able(back);
        }
        curIndex += 1;
        display.src = "images/loading.gif";
        img.src = image_source[curIndex]
        // display.src = image_source[curIndex];
        if (curIndex === length - 1) {
            disable(next);
        }
    }
}

/******************** event ********************/
back.onclick = backupdate
next.onclick = nextupdate

