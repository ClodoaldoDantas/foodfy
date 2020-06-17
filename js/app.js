const recipes = document.querySelectorAll(".recipe");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector("#close");

const showModal = () => modalOverlay.classList.add("active");
const hideModal = () => modalOverlay.classList.remove("active");

for (let recipe of recipes) {
  recipe.addEventListener("click", function () {
    const recipeImage = this.querySelector("img").src;
    const recipeName = this.querySelector("h3").textContent;
    const recipeAuthor = this.querySelector("span").textContent;

    modal.querySelector("img").src = recipeImage;
    modal.querySelector("h3").textContent = recipeName;
    modal.querySelector("span").textContent = recipeAuthor;

    showModal();
  });
}

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  hideModal();
});
