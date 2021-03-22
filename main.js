setInterval(setClock, 1000);
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60 ;
    const minuteRatio = currentDate.getMinutes() / 60 ;
    const hourRatio = currentDate.getHours() / 12 ;


    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);

}

function setRotation (element, rotationRatio){

    element.style.setProperty('--rotation', rotationRatio * 360);
}


//to prevent the hands from jumping every time we reload
setClock();