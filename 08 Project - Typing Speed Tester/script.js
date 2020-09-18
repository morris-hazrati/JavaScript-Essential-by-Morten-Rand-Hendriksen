console.log("Hi, the JavaScript is working!");

// 1- declare the constants which are the interactive elements of the page

const testWrapper = document.querySelector(".test-wrapper");
console.log("testWrapper: " , testWrapper);

const testArea = document.querySelector("#test-area");
console.log("testArea: " , testArea);

const originText = document.querySelector("#origin-text p").innerHTML;
console.log("originText: " , originText);

const resetButton = document.querySelector("#reset");
console.log("resetButton: " , resetButton);

const theTimer = document.querySelector(".timer");
console.log("theTimer: " , theTimer);

// 3- create the handler functions
function start () {
  console.log("start function triggered!");
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength === 0) {
    setInterval(runTimer , 1000);
  }
  console.log("textEnteredLength: " , textEnteredLength);
};

function spellCheck () {
  console.log("spellCheck function triggered!");
  let textEntered = testArea.value;
  console.log("textEntered: " , textEntered);
};

function reset () {
  console.log("reset function triggered");
};

// 4- create runTimer function to run the runTimer
function runTimer () {
  console.log("runTimer function triggered!");
};

// 2- add event listeners to the interactive elements

testArea.addEventListener("keypress" , start , false);
testArea.addEventListener("keyup" , spellCheck , false);
resetButton.addEventListener("click" , reset , false);
