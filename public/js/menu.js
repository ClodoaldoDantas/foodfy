const currentPage = window.location.pathname;
const links = document.querySelectorAll(".header__link");

for (link of links) {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
}
