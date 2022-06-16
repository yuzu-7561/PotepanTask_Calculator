let counter = document.getElementById('counter');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let startTime;
let elapsedTime = 0;
let timerId;
let timeToAdd = 0;

function startCount(){
  
  let h = Math.floor(elapsedTime / 3600000) %24;
  let m = Math.floor(elapsedTime / 60000) % 60;
  let s = Math.floor(elapsedTime / 1000) % 60;
  let ms = elapsedTime % 1000;
   
  h = ('0' + h).slice(-2);
  m = ('0' + m).slice(-2);
  s = ('0' + s).slice(-2);
  ms = ('0' + ms).slice(1,3);

  counter.textContent = h + ':' + m + ':' + s + ':' + ms;
  
  console.log(counter.textContent);
  
}

function countUp(){
  
  timerId = setTimeout(function(){
    
    elapsedTime = Date.now() - startTime + timeToAdd;
    startCount();
    
    countUp();
    
  }, 10);
  
}

start.addEventListener('click', function(){
  
  start.setAttribute("disabled", "disabled");
  start.classList.add("hide");
  stop.removeAttribute("disabled", "disabled");
  stop.classList.remove("hide");
  reset.classList.add("hide");
  reset.setAttribute("disabled", "disabled");
  startTime = Date.now();
  countUp();
  
});

stop.addEventListener('click', function(){
  
  if (start.hasAttribute("disabled") == true) {
    
    stop.setAttribute("disabled", "disabled");
    start.removeAttribute("disabled", "disabled");
    stop.classList.add("hide");
    start.classList.remove("hide");
    reset.removeAttribute("disabled", "disabled");
    reset.classList.remove("hide");
    clearTimeout(timerId);
    timeToAdd += Date.now() - startTime;
    
  }
  
});

reset.addEventListener('click', function(){
  
  stop.removeAttribute("disabled", "disabled");
  stop.classList.remove("hide");
  elapsedTime = 0;
  timeToAdd = 0;
  startCount();
  counter.textContent = "00:00:00:00";   
  
});