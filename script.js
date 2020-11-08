const carouselItems = ['img-c-1', 'img-c-2', 'img-c-3', 'img-c-4', 'img-c-5'];
const interval = 2000;
let aux = 1
const carousel = setInterval(() => {
    if (aux == 0) {
        document.getElementById(carouselItems[4]).classList.remove('imgOpacity');
        document.getElementById(carouselItems[aux]).classList.add('imgOpacity');
    } else {
        document.getElementById(carouselItems[aux - 1]).classList.remove('imgOpacity');
        document.getElementById(carouselItems[aux]).classList.add('imgOpacity');
    }
    aux++;
    if (aux > 4) {
        aux = 0;
    }
}, interval);
