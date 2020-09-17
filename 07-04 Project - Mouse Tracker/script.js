console.log("Javascript is working");
const AREA = document.body;
console.log(AREA);

const CIRCLE =document.querySelector(".circle");
console.log("CIRCLE IS: " , CIRCLE);

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

console.log(windowWidth , windowHeight);

function mouseCoordinates(evt) {
  // console.log("Hi");
  var horizontalPosition = windowWidth - 26 - evt.clientX;
  var verticalPosition = windowHeight - 26 -evt.clientY;
  // console.log(horizontalPosition);

  CIRCLE.style.left = horizontalPosition + "px";
  CIRCLE.style.top = verticalPosition + "px";
};

function changeColorOnTouch () {
  console.log("entered");
  CIRCLE.style.backgroundColor = "green";
  CIRCLE.style.borderColor = "green";
}
AREA.addEventListener('mousemove' , mouseCoordinates , false);

CIRCLE.addEventListener('mouseenter' , changeColorOnTouch , false);

CIRCLE.addEventListener('mouseleave' , function () {
  CIRCLE.removeAttribute("style");
} , false);
