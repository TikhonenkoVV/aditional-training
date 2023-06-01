const refs = {
    divCount: document.querySelector("input"),
    createBtn: document.querySelector("[data-create]"),
    frame: document.querySelector("#boxes"),
};

const matrix = (value) => {
    const newMatrix = [];
    const size = value * value;
    let row = 0;
    let col = 0;
    let counter = 1;

    for (let i = 0; i < value; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < value; j++) {
            newMatrix[i][j] = 0;
        }
    }

    while (counter <= size) {
        while (newMatrix[row][col] === 0) {
            newMatrix[row][col] = counter;
            counter++;
            col++;
            if (newMatrix[col] === undefined) {
                break;
            }
        }
        col--;
        row++;

        while (newMatrix[row][col] === 0) {
            newMatrix[row][col] = counter;
            counter++;
            row++;
            if (newMatrix[row] === undefined) {
                break;
            }
        }
        col--;
        row--;

        while (newMatrix[row][col] === 0) {
            newMatrix[row][col] = counter;
            counter++;
            col--;

            if (newMatrix[col] === undefined) {
                break;
            }
        }
        col++;
        row--;
        while (newMatrix[row][col] === 0) {
            newMatrix[row][col] = counter;
            counter++;
            row--;
            if (newMatrix[row] === undefined) {
                break;
            }
        }
        col++;
        row++;
    }

    return newMatrix;
};

const createBoxesTopBottom = (amount, textContent) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "10px";
    container.style.marginBottom = "10px";

    for (let i = 0; i < amount; i += 1) {
        const el = document.createElement("div");
        el.style.display = "flex";
        el.style.justifyContent = "center";
        el.style.alignItems = "center";
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.border = "1px solid #000";
        el.style.borderRadius = "4px";
        el.textContent = textContent[i];
        container.append(el);
    }
    refs.divCount.value = "";

    return refs.frame.append(container);
};

const onClick = () => {
    refs.frame.innerHTML = "";
    const value = refs.divCount.value;
    if (value < 3 || !value) return;
    const spiralMatrix = matrix(value);
    for (let i = 0; i < spiralMatrix.length; i += 1) {
        createBoxesTopBottom(spiralMatrix.length, spiralMatrix[i]);
        console.log(spiralMatrix[i]);
    }
    // console.log(spiralMatrix);
};

refs.createBtn.addEventListener("click", onClick);
