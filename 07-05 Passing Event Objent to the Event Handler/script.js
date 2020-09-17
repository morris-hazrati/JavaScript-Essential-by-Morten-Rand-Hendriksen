console.log("JavaScript is working!");

const CTA = document.querySelector(".cta a");
console.log(CTA);
const ALERT = document.querySelector("#booking-alert");
console.log(ALERT);

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal (e,button) {
  console.log("button is: " , button);
  console.log(e);
  e.preventDefault();
  button.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooops!" : CTA.innerHTML = "Book Now!";
  ALERT.classList.toggle("hide");
}

CTA.addEventListener("click" , function (e) {
  reveal(e, this);
  console.log("this is: " , this);
} , false);
