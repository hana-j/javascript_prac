const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src=`img/p${imgNumber+1}.jpeg`;
    body.prepend(image);
    image.classList.add("bgImage");

}
function getRandom(){
    const number = Math.floor(Math.random()* IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber)
}
init();