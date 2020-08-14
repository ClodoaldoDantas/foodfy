const currentPage = window.location.pathname;
const isAdmin = window.location.pathname.includes("admin");
let links;

if (isAdmin) {
  links = document.querySelectorAll(".header-admin__link");
} else {
  links = document.querySelectorAll(".header__link");
}

for (link of links) {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
}
