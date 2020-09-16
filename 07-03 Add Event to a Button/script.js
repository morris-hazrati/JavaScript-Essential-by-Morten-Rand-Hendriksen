console.log("JavaScript is running by Mori!");

//first, select the button and store it

const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

console.log(CTA);
console.log(ALERT);

console.log(CTA.classList);

//to show the button, and not to show the alert
CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

CTA.onclick = reveal;