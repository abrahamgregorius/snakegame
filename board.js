import { canvas, ctx } from "./canvas.js"

class Board {
    constructor() {
        this.row = 20
        this.col = 20
        this.width = canvas.width / this.col
        this.height = canvas.height / this.row
    }

    // 
    draw() {
        for(let i = 0; i < this.row; i++){ // row
            for(let j = 0; j < this.col; j++){ // col
                const x = j * this.width
                const y = i * this.height
                
                // Cek jika row + 1 & col + 1 == ganjil || row + 1 & col + 1 == genap
                if(((i + 1) % 2 !== 0 && (j + 1) % 2 !== 0) || ((i + 1) % 2 === 0 && (j + 1) % 2 === 0)) {
                    ctx.fillStyle = 'green'
                } else {
                    ctx.fillStyle = 'lightgreen'
                }



                ctx.fillRect(x, y, this.width, this.height)
            }
        }       
    }


}

const board = new Board()
export default board