const sellerUsers1 = [
  {
    name: "Jorg George",
    avatar: "./images/seller1.png",
    result: 885.6,
    unit: "Eth"
  },
  {
    name: "Maria Stanton",
    avatar: "./images/seller3.png",
    result: 100.1,
    unit: "Eth"
  },
  {
    name: "Kaiya Berti",
    avatar: "./images/seller5.png",
    result: 500.2,
    unit: "Eth"
  },
  {
    name: "Ben",
    avatar: "./images/seller7.png",
    result: 10,
    unit: "Eth"
  },
  {
    name: "Anna Enabel",
    avatar: "./images/seller2.png",
    result: 45.6,
    unit: "Eth"
  },
  {
    name: "Zain Berty",
    avatar: "./images/seller4.png",
    result: 42.4,
    unit: "Eth"
  },
  {
    name: "Jordyn Nis",
    avatar: "./images/seller6.png",
    result: 885.6,
    unit: "Eth"
  },
  {
    name: "Dav",
    avatar: "./images/seller8.png",
    result: 495.5,
    unit: "Eth"
  }
]
const sellerUsers2 = sellerUsers1.slice(0)
swap(sellerUsers2, 0, 2)
const sellerUsers3 = sellerUsers1.slice(0)
swap(sellerUsers3, 4, 0)
const sellerUsers4 = sellerUsers1.slice(0)
swap(sellerUsers4, 1, 6)

const sellerList = document.querySelector('.seller__list')
const sellerItemsBlock = document.querySelector('.seller__items')

function addClassForSellerItem () {
  let sellerItems = document.querySelectorAll('.seller__item')
  sellerItems.forEach(item => {
    item.classList.add('element-show')
  })
}

document.addEventListener('DOMContentLoaded', getSellerUsers(sellerUsers1))
sellerList.addEventListener('click', (e) => {
  if(e.target.innerHTML === 'Today'){
    sellerItemsBlock.innerHTML = ''
    getSellerUsers(sellerUsers1)
    addClassForSellerItem()
  } else if(e.target.innerHTML === 'Yesterday'){
    sellerItemsBlock.innerHTML = ''
    getSellerUsers(sellerUsers2)
    addClassForSellerItem()

  } else if(e.target.innerHTML === 'Last week'){
    sellerItemsBlock.innerHTML = ''
    getSellerUsers(sellerUsers3)
    addClassForSellerItem()

  } else if(e.target.innerHTML === 'Last month'){
    sellerItemsBlock.innerHTML = ''
    getSellerUsers(sellerUsers4)
    addClassForSellerItem()
  }
})


function swap(arr, a, b) {
  arr[a] = arr.splice(b, 1, arr[a])[0];
}
function getSellerUsers(usersArr){
  usersArr.map(user => {
    let userBlock = `
    <div class="seller__item element-animation">
      <div class="seller__item-content">
        <div class="seller__img">
            <img src="${user.avatar}" alt="user-ava">
        </div>
        <div class="seller__info">
            <h5 class="seller__name">${user.name}</h5>
            <p class="seller__result">${user.result} <span class="seller__result-focus">${user.unit}</span></p>
            <div class="seller__connection">
              <div class="seller__social">
                  <img src="./images/social.svg" alt="social-network icon">
              </div>
              <div class="seller__tg">
                  <img src="./images/tg.svg" alt="telegram icon">
              </div>
            </div>
        </div>
      </div>
                    </div>
    `
    
    sellerItemsBlock.innerHTML += userBlock
  })
}
