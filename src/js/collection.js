const collection =[
  {
    name: 'Abstract',
    quantity: 24,
    img1: './images/abstract1.png',
    img2: './images/abstract2.png',
    img3: './images/abstract3.png',
    img4: './images/abstract4.png',
  },
  {
    name: 'Game',
    quantity: 27,
    img1: './images/game1.png',
    img2: './images/game2.png',
    img3: './images/game3.png',
    img4: './images/game4.png',
  },
  {
    name: '3D',
    quantity: 13,
    img1: './images/3D1.png',
    img2: './images/3D2.png',
    img3: './images/3D3.png',
    img4: './images/3D4.png',
  },
  {
    name: 'Modern Atr',
    quantity: 8,
    img1: './images/ModernArt1.png',
    img2: './images/ModernArt2.png',
    img3: './images/ModernArt3.png',
    img4: './images/ModernArt4.png',
  },
  {
    name: 'Watercolor',
    quantity: 4,
    img1: './images/Watercolor1.png',
    img2: './images/Watercolor2.png',
    img3: './images/Watercolor3.png',
    img4: './images/Watercolor4.png',
  },
  {
    name: 'Graffiti',
    quantity: 10,
    img1: './images/Graffiti1.png',
    img2: './images/Graffiti2.png',
    img3: './images/Graffiti3.png',
    img4: './images/Graffiti4.png',
  },
];

let collectionItems = document.querySelector(".collection__items")
collection.map(item => {
  let collectionItem = `
  <div class="collection__item element-animation">
  <div class="collection__images">
     <img src=${item.img1} alt="${item.name} photo" class="collection__img">
     <img src=${item.img2} alt="${item.name} photo" class="collection__img">
     <img src=${item.img3} alt="${item.name} photo" class="collection__img">
     <img src=${item.img4} alt="${item.name} photo" class="collection__img">
  </div>
  <div class="collection__info">
     <p class="collection__genre">${item.name}</p>
     <div class="collection__quantity">
        <p class="collection__quantity-text">${item.quantity} items</p>
     </div>
  </div>
</div>
  `
  collectionItems.innerHTML += collectionItem;

})