let images = [
    "slide1","slide2","slide3",
]
let slideIndication = __(".slide-indication i")

// for (let index = 0; index < slideIndication.length; index++) {
//     const element = slideIndication[index];
//     console.log(element);
// }

let hero = _(".hero");
let counter = 1;

setInterval(function () {
    let slide = `url(assets/images/${images[counter]}.jpg)`;
    // _(".far").toggleClass('fa');
    // _(".fa").toggleClass('fa');
    hero.style.backgroundImage = slide;
    counter++;
    if (counter == images.length){
        counter = 0;
    }
}, 5000);
