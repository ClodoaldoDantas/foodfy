const modalContainer = document.querySelector(".modal__overlay");
const btnOpen = document.querySelector("#open");
const btnCancel = document.querySelector("#cancel");

btnOpen.addEventListener("click", () => {
  modalContainer.classList.add("active");
});

btnCancel.addEventListener("click", () => {
  modalContainer.classList.remove("active");
});
