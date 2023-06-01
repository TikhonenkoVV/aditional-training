function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const frame = document.querySelector("#boxes");
const divCount = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

frame.style.display = "flex";
frame.style.flexDirection = "column";
frame.style.gap = "10px";
frame.style.padding = "10px";

const createBoxesTopBottom = (amount, color) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "10px";

    for (let i = 0; i < amount; i += 1) {
        const el = document.createElement("div");
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.backgroundColor = color;
        container.append(el);
    }
    divCount.value = "";

    return frame.append(container);
};

const createBgr = (amount, border, bgr) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "10px";

    for (let i = 0; i < amount; i += 1) {
        const el = document.createElement("div");
        el.style.width = "30px";
        el.style.height = "30px";
        if (
            i === 0 || i === amount - 1
                ? (el.style.backgroundColor = border)
                : (el.style.backgroundColor = bgr)
        );
        container.append(el);
    }
    amount = "";

    return frame.append(container);
};

createBtn.addEventListener("click", () => {
    const sideSize = divCount.value;
    if (sideSize <= 2) {
        alert("Мінімально допустиме значення: 3");
        return;
    }
    const borderColor = getRandomHexColor();
    const bgrColor = getRandomHexColor();
    createBoxesTopBottom(sideSize, borderColor);
    for (let i = 0; i < sideSize - 2; i += 1) {
        createBgr(sideSize, borderColor, bgrColor);
    }
    createBoxesTopBottom(sideSize, borderColor);
});

destroyBtn.addEventListener("click", () => {
    frame.innerHTML = "";
    divCount.value = "";
});
