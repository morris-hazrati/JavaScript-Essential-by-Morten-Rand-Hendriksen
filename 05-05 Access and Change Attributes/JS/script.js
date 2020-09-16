console.log("the javascript is running");
const CTAELEMENT = document.querySelector(".cta a");
console.log(CTAELEMENT);

console.log(CTAELEMENT.attributes);

if (CTAELEMENT.hasAttribute("target")) {
    console.log(CTAELEMENT.getAttribute("target"));
} else {
    CTAELEMENT.setAttribute("target" , "_blank");
}