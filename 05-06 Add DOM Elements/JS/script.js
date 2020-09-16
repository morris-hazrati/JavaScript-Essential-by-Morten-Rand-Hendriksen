const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");
console.log(FEATURED);
console.log(THEIMAGE);

var altText = THEIMAGE.getAttribute("alt");
console.log(altText);

var captionElement = document.createElement("figcaption");
console.log(captionElement);

var captionText = document.createTextNode(altText);
console.log(captionText);

captionElement.appendChild(captionText);
console.log(captionElement);

FEATURED.appendChild(captionElement);
THEIMAGE.setAttribute("alt" , "");