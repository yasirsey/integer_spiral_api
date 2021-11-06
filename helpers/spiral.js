const spiral = (x, y) => {
    //Create an empty x * y array.
    const array = new Array(y).fill().map(_ => new Array(x).fill())
    let counter = 0
    let startCol = 0
    let endCol = x - 1
    let startRow = 0
    let endRow = y - 1

    //Create an loop for all rows and columns
    while(startCol <= endCol && startRow <= endRow) {
        for(let i = startCol; i <= endCol; i++) {
            array[startRow][i] = counter
            counter++
        }
        startRow++

        for(let i = startRow; i <= endRow; i++) {
            array[i][endCol] = counter
            counter++
        }
        endCol--

        for(let i = endCol; i >= startCol; i--) {
            array[endRow][i] = counter
            counter++
        }
        endRow--

        for(let i = endRow; i >= startRow; i--) {
            array[i][startCol] = counter
            counter++
        }
        startCol++
    }

    return array
}

module.exports = spiral