import { canvas, ctx } from "./canvas.js"
import board from "./board.js"

class Snake {
    constructor() {
        this.positions = [ // Array ini berisi posisi snake (initial)
            {row: 1, col: 3},
            {row: 1, col: 2},
            {row: 1, col: 1}
        ]
        this.dx = 1
        this.dy = 0
    }

    draw() {
        this.positions.forEach((position, index) => {
            const x = position.col * board.width
            const y = position.row * board.height

            
            
            ctx.fillStyle = "red"
            if(index == 0) {
                ctx.fillStyle = "blue"
            }

            ctx.fillRect(x, y, board.width, board.height)
        })
    }

    move() { // pindahkan positions snake -> position baru dengan iterasi dari belakang
        //  Movement
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for(let i = (this.positions.length - 1); i >= 0; i--) {
            if(i == 0) {
                this.positions[i] = {
                    row: this.positions[i].row + this.dy,
                    col: this.positions[i].col + this.dx
                }

                // if(this.positions[i].row === )
            }
            else {
                this.positions[i] = this.positions[i - 1]
            }
        }


    }

}

const snake = new Snake()

export default snake