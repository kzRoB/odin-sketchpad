function centerDiv(object) {
    object.style.marginLeft = "auto"
    object.style.marginRight = "auto"
}

var grid = null
function createGrid(gridSize) {
    //Delete grid in order to update grid size
    if (grid != null) {
        grid.remove()
        grid = null
    }

    //Create the drawing board
    grid = document.createElement("div")
    grid.style.backgroundColor = "rgb(200,200,200)"
    grid.style.border = "solid"
    grid.style.borderWidth = "1px"
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
}
createGrid(16)

const clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener("click", () => {
    for (const column of grid.children) {
        for (const row of column.children) {
            row.style.backgroundColor = "rgb(255,255,255)"
        }
    }
})

const gridSizeBtn = document.getElementById("gridSizeBtn")
gridSizeBtn.addEventListener("click", () => {
    let newGridSize = prompt("Set the new grid size to: (number range: 2-100)", "16")
    if (newGridSize == null) {return}
    if (newGridSize < 2) {newGridSize = 2}
    if (newGridSize > 100) {newGridSize = 100}
    createGrid(newGridSize)
})

const borderBtn = document.getElementById("borderBtn")
var bordersOn = true
borderBtn.addEventListener("click", () => {
    bordersOn = !bordersOn
    borderBtn.value = ("Hide Borders" && bordersOn || "Show Borders");
    for (const column of grid.children) {
        for (const row of column.children) {
            row.style.border = ("solid" && bordersOn || "0");
        }
    }
})