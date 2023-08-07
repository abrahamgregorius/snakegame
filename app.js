
const update = () => {
    board.draw()
    snake.draw()
}

update()

setInterval(() => {
    snake.move()
    update()
}, 500)