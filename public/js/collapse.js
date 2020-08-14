const buttons = document.querySelectorAll('.toggle');

function collapse(e) {
  e.preventDefault();
  const button = e.target;
  const content = document.getElementById(button.dataset.target);

  if(content.classList.contains('hide')){
    content.classList.remove('hide');
    button.textContent = 'Esconder';
  } else {
    content.classList.add('hide');
    button.textContent = 'Mostrar';
  }
}

for(button of buttons) {
  button.addEventListener('click', collapse);
}