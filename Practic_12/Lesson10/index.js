let panes = document.querySelectorAll(".pane");

for (let pane of panes) {
  pane.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">X</button>'
  );
  pane.firstChild.onclick = () => pane.remove();
}
