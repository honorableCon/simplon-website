let images = [
    "slide1","slide2","slide3",
]
let slideIndication = __(".slide-indication i")


let hero = _(".hero");
let counter = 1;

setInterval(function () {
    let slide = `url(assets/images/${images[counter]}.jpg)`;
    hero.style.backgroundImage = slide;

    counter++;
    if (counter == images.length){
        counter = 0;
    }
}, 5000);
