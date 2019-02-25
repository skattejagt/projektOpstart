let img = {};
let i = 0;
let images =["pide1.jpeg","pide2.png"];

function nextImage(){
 ++i
  let imageIndex = i % images.length
  img.attribute('src',images[imageIndex]);

}
function imageRotate(){
  img.attribute('style','transform:rotate(90deg)');
}

function imageRotateMU(){
  img.attribute('style','transform:rotate(-90deg)');
}

function bygKnap(navn,metode){
 button = createButton(navn).parent(select("#knapper"));
 button.mousePressed(metode);

}

function setup() {
  img = createImg(images[0]).parent(select("#billede"));
  bygKnap("roter med uret",imageRotate)
  bygKnap("roter mod uret",imageRotateMU)
  bygKnap("næste billeder",nextImage)
         
  }
