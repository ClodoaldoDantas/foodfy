const links = document.querySelectorAll("a[href^='#']");

function addField(event) {
  event.preventDefault();
  const container = event.target.parentNode;
  const fieldContainer = container.querySelector(".fields");
  const fields = fieldContainer.querySelectorAll("input");

  const newField = fields[fields.length - 1].cloneNode(true);

  if (newField.value === "") return;

  newField.value = "";
  fieldContainer.appendChild(newField);
}

for (link of links) {
  link.addEventListener("click", addField);
}
