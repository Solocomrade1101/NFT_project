document.addEventListener('DOMContentLoaded', () => {
  const elementsShow = document.querySelectorAll('.element-animation')
  
  if(document.documentElement.clientWidth > 1000 ){
    animation()
  } else {
    elementsShow.forEach(element => {
    element.classList.add('element-show')
  })
    console.log('no animation')
  }
})




function animation(){
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.4] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}
}
