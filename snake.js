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

    // move() {
    //     setInterval(() => {
    //         for(let i = )
    //     }, 100)
    // }

}

const snake = new Snake()
