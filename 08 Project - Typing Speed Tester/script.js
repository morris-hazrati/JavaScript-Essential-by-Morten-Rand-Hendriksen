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

var timer = [0,0,0,0];

// 3- create the handler functions
function start () {
  console.log("start function triggered!");
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength === 0) {
    setInterval(runTimer , 10);
  }
  console.log("textEnteredLength: " , textEnteredLength);
};

function spellCheck () {
  console.log("spellCheck function triggered!");
  let textEntered = testArea.value;
  let textEnteredLength = testArea.value.length;
  console.log("textEntered: " , textEntered);
  let originTextMatch = originText.substring(0 , textEnteredLength);

  if (textEntered == originText) {
    testWrapper.style.borderColor = "#429890";
  } else {
    if (textEntered == originTextMatch) {
      testWrapper.style.borderColor = "#65ccf3";
    } else {testWrapper.style.borderColor = "#e95d0f";}
    }
    
};

function reset () {
  console.log("reset function triggered");
};

// 4- create runTimer function to run the runTimer
function runTimer () {
  // console.log("runTimer function triggered!");
  timer[0] = Math.floor(timer[3]/100/60);
  timer[1] = Math.floor(timer[3]/100 - timer[0]*60);
  timer[2] = Math.floor(timer[3] - timer[1]*100 - timer[0]*6000);
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer [1]) + ":" + leadingZero(timer[2]);
  timer[3]++;
  // console.log(currentTime);
  theTimer.innerHTML = currentTime;
};

// 5- to help the runTimer, a helping function for leading zero created
function leadingZero (time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
};

// 2- add event listeners to the interactive elements

testArea.addEventListener("keypress" , start , false);
testArea.addEventListener("keyup" , spellCheck , false);
resetButton.addEventListener("click" , reset , false);
