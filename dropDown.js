let structuresList = document.querySelector('.structures-list')
let partsList = document.querySelector('.parts-list')

let structuresTitle = document.querySelector('.structure-title')
let partsTitle = document.querySelector('.parts-title')

console.log(structuresTitle)

structuresTitle.addEventListener('click', () => {
      if (structuresList.classList.contains('hidden')){
            structuresList.classList.remove('hidden')
      } else {
            structuresList.classList.add('hidden')
      }
})
