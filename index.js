const gridSize = 16

//testing
//document.body.style.color = "rgb(255,255,255)"
//document.body.style.backgroundColor = "rgb(0,0,0)"

//MouseDown
var mouseDown = false
document.body.onmousedown = function() { 
    mouseDown = true
}
document.body.onmouseup = function() {
    mouseDown = false
}

//Create the drawing board
const grid = document.createElement("div")
grid.style.width = "640px"
grid.style.height = "640px"
grid.style.gap = "4px"
grid.style.display = "grid"
grid.style.gridTemplateColumns = "repeat("+gridSize+","+100/gridSize+"%)"
grid.style.gridTemplateRows = "repeat("+gridSize+","+100/gridSize+"%)"
grid.style.backgroundColor = "rgb(200,200,200)"
document.body.appendChild(grid)

//Create each square in the drawing board
for (let i=0; i<gridSize**2; i++) {
    let box = document.createElement("div")
    box.style.backgroundColor = "rgb(255,255,255)"
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "rgb(0,0,0)"
    })
    grid.appendChild(box)
}