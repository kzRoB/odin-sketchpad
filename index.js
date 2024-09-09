const gridSize = 16

function centerDiv(object) {
    object.style.marginLeft = "auto"
    object.style.marginRight = "auto"
}

//Create the drawing board
const grid = document.createElement("div")
grid.style.backgroundColor = "rgb(200,200,200)"
grid.style.width = "480px"
grid.style.height = "480px"
centerDiv(grid)
grid.style.display = "flex"
grid.style.flexDirection = "row"
grid.style.flexWrap = "wrap"
document.body.appendChild(grid)

//Create each column
for (let i=0; i<gridSize; i++) {
    let column = document.createElement("div")
    column.style.backgroundColor = "rgb(255,255,255)"
    column.style.display = "flex"
    column.style.flexDirection = "column"
    column.style.flex = 1
    column.style.flexWrap = "wrap;"
    grid.appendChild(column)

    //Create each row
    for (let i=0; i<gridSize; i++) {
        let row = document.createElement("div")
        row.style.backgroundColor = "rgb(255,255,255)"
        row.style.border = "solid"
        row.style.borderWidth = "1px"
        row.style.flexBasis = "100%"
        row.style.flex = 1
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "rgb(0,0,0)"
        })
        column.appendChild(row)
    }
}