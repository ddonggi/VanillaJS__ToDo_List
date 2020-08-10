const body = document.querySelector("body");
const IMG_NUMBER = 5;


function paintImage(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber+1}.JPG`;
    image.classList.add("bgImage")
    body.prepend(image);
 
}

function genRandom(){
    const number = Math.floor(Math.random()* IMG_NUMBER);
    return number;
}

function init(){
    //Math.random() * 5  1~5까지의 랜덤숫자
    //Math.floor() , Math.ceil() 올림,내림
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();