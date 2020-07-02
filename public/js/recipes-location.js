const recipes = document.querySelectorAll(".recipe");

for (const recipe of recipes) {
  recipe.addEventListener("click", function () {
    const recipeId = recipe.getAttribute("id");
    window.location.href = `/recipes/${recipeId}`;
  });
}
