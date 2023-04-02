let startTime, elapsedTime = 0, timeInterval
const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

start.addEventListener("click", function() {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(updateTime, 10);
  this.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
});

stop.addEventListener("click", function() {
  clearInterval(timeInterval);
  elapsedTime = Date.now() - startTime
  this.disabled = true;
  start.disabled = false;
  reset.disabled = false;
});

reset.addEventListener("click", function() {
  clearInterval(timeInterval);
  elapsedTime = 0;
  start.disabled = false;
  stop.disabled = true;
  this.disabled = true;
  time.innerHTML = "00:00:00:000";
});

function updateTime() {
  let now = Date.now();
  let elapsed = now - startTime;
  let hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
  let mseconds = Math.floor(elapsed % 1000);
  
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  mseconds = (mseconds < 10) ? "00" + mseconds : (mseconds < 100) ? "0" + mseconds : mseconds;
  
  time.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + mseconds;
};
