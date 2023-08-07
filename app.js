import { canvas, ctx } from './canvas.js'
import board from './board.js'
import snake from './snake.js'
import food from './food.js'

let keyActive 
const update = () => {
    board.draw()
    food.draw()
    snake.draw()
}

update()
setInterval(() => {
    if(keyActive == 'ArrowDown' && snake.dy !== -1){
        snake.dx = 0
        snake.dy = 1
    }
    else if(keyActive == 'ArrowLeft' && snake.dx !== 1){
        snake.dx = -1
        snake.dy = 0
    }
    else if(keyActive == 'ArrowRight' && snake.dx !== -1){
        snake.dx = 1
        snake.dy = 0
    }
    else if(keyActive == 'ArrowUp' && snake.dy !== 1){
        snake.dx = 0
        snake.dy = -1
    }


    snake.move()
    update()
}, 250)

document.addEventListener('keyup', (event) => {
    keyActive = event.key
})