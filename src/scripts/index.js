// require index.html so livereload will watch it
const index = require('../../index.html') // eslint-disable-line no-unused-vars

const $mom = document.getElementsByClassName('container')[0]
const $grid = document.getElementById('grid')

const $containers = [$mom]

for (let i = 1; i < 64; i++) {
  const $clone = $mom.cloneNode(true)
  $containers.push($clone)
  $grid.appendChild($clone)
}

let $lastCard

function makeFlippable($container){
  const $card = $container.children[0]
  let lastFlip = 'left'// 'left' or 'right'
  $container.addEventListener('mousemove', (e) => {
    if (e.movementX > 0) {
      if (lastFlip === 'right') return
      $card.style.transform = 'rotateY(180deg)'
      lastFlip = 'right'
    } else {
      if (lastFlip === 'left') return
      $card.style.transform = 'rotateY(0deg)'
      lastFlip = 'left'
    }
    if ($lastCard) $lastCard.style.zIndex = '0'
    $container.style.zIndex = '1'
    $lastCard = $container
  })

//   $container.addEventListener('mousemove', (e) => {
//     const deg = (e.offsetX / e.target.clientWidth) * 180
//     $card.style.transform = `rotateY(${deg}deg)`
//   })
}
// isFlipped = true

$containers.forEach(makeFlippable)
