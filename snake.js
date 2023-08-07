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
        // iterasi dari belakang 
        for(let i = this.positions.length - 1; i >= 0; i--){ // for i = jumlah item di position - 1, i <= 0, i--
            if(i == 0) { // Jika i == 0 || jika iterasi merujuk pada head
                this.positions[i] = { // merujuk pada index yang telah pass dalam [if] yaitu 0
                    row: this.positions[i].row + this.dy, // row(property): position index row sekarang + arah gerak
                    col: this.positions[i].col + this.dx // col(property): position index col sekarang + arah gerak
                }
            } else { // Jika iterasi merujuk bukan pada index ke 0 || bukan pada head
                this.positions[i] = this.positions[i - 1] // value dari object position[i] di reassign dengan position[i - 1] atau position depannya
            }
            console.log(this.positions)
        }
    }

}

const snake = new Snake()
