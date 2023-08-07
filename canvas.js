const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

canvas.style.border = "1px solid black"
canvas.width = 500
canvas.height = 500

export {
    canvas,
    ctx
}