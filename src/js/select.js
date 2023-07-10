
const select = document.querySelector('.seller__select');
const sellerList = document.querySelector('.seller__list')
const sellerPoint = document.querySelectorAll('.seller__point')
const arrowBottom = document.querySelector('.arrowBottom')
const arrowTop = document.querySelector('.arrowTop')
let counter = false;


select.addEventListener('click', () => {
counter = !counter 
if (!counter){
  arrowTop.style.display = 'none'
  arrowBottom.classList.add('arrowOpen')
  arrowBottom.style.display = 'block'
  sellerList.classList.add("seller__list-hide")
  sellerList.style.cursor="default"
  sellerList.style.zIndex = -1
} else{
  arrowTop.style.display = 'block'
  arrowTop.classList.add('arrowOpen')
  arrowBottom.style.display = 'none'
  sellerList.classList.remove("seller__list-hide")
  sellerList.style.cursor="pointer"
  sellerList.style.zIndex = 2

}

})

sellerPoint.forEach(point => {
  point.addEventListener('click', (e) => {
    const pointShow = e.target.outerText
    let sellerText = document.querySelector('.seller__text')
    sellerText.innerText = pointShow
    sellerList.classList.add('seller__list-hide')
  })
})
