const board = document.querySelector('#board')
colors = ['#696969', '#556B2F', '#8B008B', '#2E8B57', '#A0522D', '#9932CC', '#8B4513', '#483D8B', '#5F9EA0', '#800000']

const SQUARES_NUMBER = 1600

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px${color}`
}


function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1D1D1D'
  element.style.boxShadow = `0 0 2px #000000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random()  *  colors.length)]
}
