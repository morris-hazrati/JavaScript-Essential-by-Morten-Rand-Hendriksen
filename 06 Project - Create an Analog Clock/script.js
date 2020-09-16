//select the hourhand, secondhand and minute hand to process in the rest of the code
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 20;
let minPosition = 180;
let secPosition = 270;

//the current time will be created 
//then the hour, minute and second of the current time will be extracted
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr +" Minute: " + min + " Seconds:" + sec);

//move the hands, by transform and rotate properties and the calcualted degrees of the rotations
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

