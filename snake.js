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

    move(food) { // pindahkan positions snake -> position baru dengan iterasi dari belakang
        //  Movement
        let lastPart = this.positions[this.positions.length - 1] // variable ekor terakhir sebelum pindah
        for(let i = (this.positions.length - 1); i >= 0; i--) { // for i = jumlah item di position - 1, i <= 0, i--
            if(i == 0) { 
                this.positions[0] = { // merujuk pada index yang telah pass dalam [if] yaitu 0
                    row: this.positions[i].row + this.dy, // row(property): position index row sekarang + arah gerak
                    col: this.positions[i].col + this.dx // col(property): position index col sekarang + arah gerak
                }

                if(this.positions[0].row === food.row && this.positions[0].col === food.col){ // jika col & row head == col & row food 
                    this.positions.push(lastPart) // tambahkan ekor baru di array
                    food.generatePosition() // generate posisi baru untuk food
                }
            }
            else {
                this.positions[i] = this.positions[i - 1] // value dari object position[i] di reassign dengan position[i - 1] atau position depannya
            }
        }


    }

}

const snake = new Snake()

export default snake