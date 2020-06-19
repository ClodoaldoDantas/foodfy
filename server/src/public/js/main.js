const route = window.location.pathname;
const links = document.querySelectorAll('.header__link');

for (link of links) {
  if (link.pathname === route) {
    link.classList.add('active');
  }
}
