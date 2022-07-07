const tagIMG = document.querySelector('.app__slider');

const fileImages = [
    'slider0.png','slider1.png','slider2.png','slider3.png',
]
var counter = 0;
const previewSlider = ()=>{
    if(counter < 4){
        tagIMG.src = `./imagenes/iptv/${fileImages[counter]}`;
    }else{
        counter = 0;
    }
    counter += 1;
}

setInterval(()=>{
    previewSlider()
},2000)