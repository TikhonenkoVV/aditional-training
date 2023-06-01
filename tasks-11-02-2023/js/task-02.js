import { galleryItems } from "../../data/gallery-items.js";

const refs = {
    backdrop: document.querySelector(".backdrop"),
    openModalBtn: document.querySelector(".open-modal-btn"),
    closeModalBtn: document.querySelector(".close-modal-btn"),
    galleryList: document.querySelector(".gallery-list"),
};

refs.openModalBtn.addEventListener("click", onOpenModalBtnClick);
refs.closeModalBtn.addEventListener("click", onCloseModalBtnClick);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModalBtnClick() {
    openModal();
}

function onCloseModalBtnClick() {
    closeModal();
}

function openModal() {
    refs.backdrop.classList.remove("is-hidden");
    document.addEventListener("keydown", onEscPress);
}

function closeModal() {
    refs.backdrop.classList.add("is-hidden");
    document.removeEventListener("keydown", onEscPress);
}

function onEscPress(e) {
    if (e.code !== "Escape") return;
    closeModal();
}

function onBackdropClick(e) {
    if (e.currentTarget !== e.target) return;
    closeModal();
}

function renderGallery(galleryItems) {
    const markup = galleryItems
        .map(
            ({ preview, original, description }) => `
<li><a href="${original}"><img src="${preview}" alt="${description}" data-src="${original}"></a></li>
    `
        )
        .join("");
    refs.galleryList.innerHTML = markup;
}

renderGallery(galleryItems);
