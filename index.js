const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1

function createGrid() {
    for (var i = 0; i < 100; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square) 
        squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake')) 

function move() {  
    const tail = currentSnake.pop() 
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)
    squares[currentSnake[0]].classList.add('snake')
}
move()

let timerId = setInterval(move, 1000)

function control(e) {
    if (e.keyCode === 39) {
        console.log("right")
    } else if (e.keyCode === 38) {
        console.log("up") 
    } else if (e.keyCode === 37) {
        console.log("left")
    } else if (e.keyCode === 40) {
        console.log("down")
    }
}