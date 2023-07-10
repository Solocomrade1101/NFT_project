const artworks = [
  {
    title: 'Vaporart',
    studio: 'by weidner art',
    result: 2.45,
    likes: '50K',
    img: './images/ArtWorks1.png'
  },
  {
    title: 'The Angel',
    studio: 'by visual 3d',
    result: 4.85,
    likes: '30K',
    img: './images/ArtWorks2.png'
  },
  {
    title: 'Aesthetic',
    studio: 'by itvrn',
    result: 1.98,
    likes: '20K',
    img: './images/ArtWorks3.png'
  },
  {
    title: 'Wadafox',
    studio: 'by wonder art ',
    result: 5.11,
    likes: '90K',
    img: './images/ArtWorks4.png'
  },
]

const artworksExamples = document.querySelector(".artworks__examples")
artworks.map(work => {
  const artworksExample = `
    <div class="artworks__example example element-animation">
    <div class="example__content">
       <div class="example__img">
          <img src=${work.img} alt="${work.title}">
       </div>
       <div class="example__title-block">
          <h3 class="example__title">${work.title}</h3>
          <div class="example__result">
             <p class="example__result-text">${work.result} ETH</p>

          </div>
       </div>
       <p class="example__studio">${work.studio}</p>
       <div class="example__likes">
          <img src="./images/heart.svg" alt="likes" class="example__likes-img">
          <p class="example__likes-text">${work.likes}</p>
          
       </div>
       <p class="example__available">1 of 1 available</p>
    </div>
    </div>
`
artworksExamples.innerHTML += artworksExample 
})

