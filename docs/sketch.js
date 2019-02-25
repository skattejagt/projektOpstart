let img = {};
let i = 0;
let images =[“52797017_368183417367627_2446544797800857600_n.jpg”,
“52938785_375232346399103_8364858157998014464_n.jpg”,
“EAD568A1-46D9-404A-90AD-FFE51648C02A.jpeg”,
“IMG_20190225_145310.jpg”,
“IMG_20190225_145640.jpg”,
“IMG_4948.JPG”,
“aamose.jpg”,
“charlotte.jpg”,
“pide1.jpeg”];

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
