const IMAGES = document.querySelectorAll("img");
console.log("IMAGES: " , IMAGES);

for (let i=0; i < IMAGES.length ; i++) {
  let imgScr = IMAGES[i].getAttribute("src");
  // to cut off all endings which indicate the size of IMAGES
  imgScr = imgScr.slice(0 , -8);
  console.log("imgScr: " , imgScr);

  //then, the data-type of images extracted
  let type = IMAGES[i].getAttribute("data-type");
  console.log("type: " , type);
}
