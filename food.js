class Food {
    constructor() {
        this.generatePosition()
    }

    generatePosition() {
        this.col = Math.round(Math.random() * (board.col - 1))
        this.row = Math.round(Math.random() * (board.row - 1))

        snake.positions.forEach((position) => {
            if(this.col === position.col && this.row === position.row) {
                this.generatePosition()
            }
        })
    }


    draw() {
        const x = this.col * board.width
        const y = this.row * board.height
        ctx.fillStyle = "brown"
        ctx.fillRect(x, y, board.width, board.height)
    }
}

const food = new Food()