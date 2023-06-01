const alertBtn = document.querySelector("#alert-btn");
const output = document.querySelector(".output");
const alertInput = document.querySelector(".alert-input");

console.dir(output.tagName);

const onAlertBtnClick = () => {
    // const inputValue = alertInput.value;
    output.textContent = alertInput.value;
};

alertBtn.addEventListener("click", onAlertBtnClick);
