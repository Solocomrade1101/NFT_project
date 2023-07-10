const timeNode = document.querySelector('.auction__timer');
const hoursBlock = document.querySelector('.auction__hours-n');
const minsBlock = document.querySelector('.auction__mins-n');
const secsBlock = document.querySelector('.auction__secs-n');
let time = 82399
if(localStorage.length !== 0){
  time = localStorage.getItem('time')
}




setInterval(updateCountdown, 1000);

function updateCountdown(){

  let hours = Math.floor(time / 3600);
  hours = hours < 10 ? '0' + hours : hours
  let minuts = Math.floor(time / 60) - hours * 60
  minuts = minuts < 10 ? '0' + minuts : minuts
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds
  hoursBlock.innerHTML = `${hours}`
  minsBlock.innerHTML = `${minuts}`
  secsBlock.innerHTML = `${seconds}`
  time--;
  localStorage.setItem('time', time)
  if(time === 0 || time <= 0){
    localStorage.clear()
    location.reload()
  }
}
