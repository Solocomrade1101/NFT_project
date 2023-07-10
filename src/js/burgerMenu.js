const burgerMenu = document.querySelector('.search-info__burger-menu')
const searchBlock = document.querySelector('.search-info')
const adaptiveMenu = document.querySelector('.adaptive-menu')
const burgerMenuCross = document.querySelector('.search-info__burger-menu-cross')
const menuLink = document.querySelectorAll('.adaptive-menu__link')

if(document.documentElement.clientWidth <= 1200){
  burgerMenu.addEventListener('click', () =>{
  burgerMenu.style.display = 'none';
  burgerMenuCross.style.display = 'block';
  adaptiveMenu.style.display = 'block';
  document.querySelector('main').style.display = 'none'
  document.querySelector('footer').style.display = 'none'
})


burgerMenuCross.addEventListener('click', () => {
  adaptiveMenu.style.display = 'none'
  burgerMenu.style.display = 'block';
  burgerMenuCross.style.display = 'none';
  document.querySelector('main').style.display = 'block'
  document.querySelector('footer').style.display = 'block'
})

menuLink.forEach(link => {
  link.addEventListener('click', () => {
    adaptiveMenu.style.display = 'none'
    burgerMenu.style.display = 'block';
    burgerMenuCross.style.display = 'none';
    document.querySelector('main').style.display = 'block'
    document.querySelector('footer').style.display = 'block'
  })
})
} else{
  
}
