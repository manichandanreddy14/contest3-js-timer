let time=document.getElementById("display");
let start=document.getElementById("start");
let reset=document.getElementById("reset");
let timer=document.getElementById("display");

    
    
    
    start.addEventListener("click", toggleTimer);

let timerId;
 function toggleTimer() {
   if (!timerId) { // if the timer is not started yet
//     // play functionality
    button.innerText = "stop";
    timerId = setInterval(() => {
                  if (time === 0) {
                   timerElement.innerText = "time's up";
                   clearInterval(timerId);
                   timerId = undefined;
                   return;
                  }
                  timerElement.innerText = --time;
               }, 1000);
  } else {
    // pause functionality
   button.innerText = "start";
   clearInterval(timerId); // 3
    timerId = undefined;
   }
 }