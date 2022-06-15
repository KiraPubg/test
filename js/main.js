const popup = document.querySelector(".popup");
const mask = document.querySelector(".mask");
const btnOpen = document.querySelector(".popup__open");
const btnClose = document.querySelector(".close");
const body = document.querySelector("body");
btnOpen.addEventListener("click", () => {
	popup.classList.add("active");
	mask.classList.add("active");
	body.classList.add("locked");
})
btnClose.addEventListener("click", () => {
	popup.classList.remove("active");
	mask.classList.remove("active");
	body.classList.remove("locked");
})