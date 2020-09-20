const IMAGES = document.querySelectorAll("img");
console.log("IMAGES: " , IMAGES);
const SIZES = {
  showcase: "100vw",
  reason: "(max-width: 799px) 100vw , 372px",
  feature: "(max-width: 799px) 100vw , 558px",
  story: "(max-width: 799 px) 100vw , 670px",
}

//a function to create srcset attribute for each images
function makeSrcset (imgScr) {
  let markup = [];
  let width = 400;

  for (let i=0; i < 5 ; i++) {
    markup[i] = imgScr + "-" + width + ".jpg " + width + "w";
    width += 400;
  }

  return markup.join();
}


for (let i=0; i < IMAGES.length ; i++) {
  let imgSrc = IMAGES[i].getAttribute("src");
  // to cut off all endings which indicate the size of IMAGES
  imgSrc = imgSrc.slice(0 , -8);
  console.log("imgScr: " , imgSrc);

  let srcset = makeSrcset(imgSrc);
  console.log("srcset: " , srcset);



  //then, the data-type of images extracted
  let type = IMAGES[i].getAttribute("data-type");
  console.log("type: " , type);
  let sizes = SIZES[type];

  console.log("sizes: " , sizes);

  //Lastly, the srcset and sizes attributes injected to the img getElementsByTagName
  IMAGES[i].setAttribute("srcset" , srcset);
  IMAGES[i].setAttribute("sizes" , sizes);
}
