import { canvas, ctx } from './canvas.js'
import board from './board.js'
import snake from './snake.js'
import food from './food.js'

let keyActive 
const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    board.draw()
    food.draw()
    snake.draw()
}

update()
const animate = setInterval(() => {
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
    snake.move(food)
    
    let isHit = false
    
    snake.positions.forEach((position, index) => {
        if(index == 0) return
        if(snake.positions[0].row == position.row && snake.positions[0].col == position.col){
            isHit = true
        }
    })

    if(snake.positions[0].row < 0 || snake.positions[0].row > (board.row - 1) || snake.positions[0].col < 0 || snake.positions[0].col > (board.col - 1) || isHit == true){
        clearInterval(animate)
        return
    }





    update()
}, 250)

document.addEventListener('keyup', (event) => {
    keyActive = event.key
})