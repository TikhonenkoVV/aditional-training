const spiralMatrix = (sizeMatrix) => {
    const newMatrix = [];
    let count = 1;
    let row = 0;
    let col = 0;

    for (let i = 0; i < sizeMatrix; i++) {
        // creating matrix N x N and filling it with zeros
        newMatrix[i] = [];

        for (let j = 0; j < sizeMatrix; j++) {
            newMatrix[i][j] = 0;
        }
    }

    while (count <= sizeMatrix * sizeMatrix) {
        while (newMatrix[row][col] === 0) {
            // right
            newMatrix[row][col] = count;
            count++;
            col++;

            if (newMatrix[col] === undefined) {
                break;
            }
        }

        col--;
        row++;

        while (newMatrix[row][col] === 0) {
            // down
            newMatrix[row][col] = count;
            count++;
            row++;
        }

        col++;
        row++;

        while (newMatrix[row][col] === 0) {
            // left
            newMatrix[row][col] = count;
            count++;
            col--;

            if (newMatrix[col] === undefined) {
                break;
            }
        }

        col++;
        row--;

        while (newMatrix[row][col] === 0) {
            // left
            newMatrix[row][col] = count;
            count++;
            row--;
        }

        col--;
        row--;
    }

    return newMatrix;
};

console.log(spiralMatrix(5));
