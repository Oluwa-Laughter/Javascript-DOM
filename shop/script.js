var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete"));
  li.appendChild(btn);

  function removeParent(event) {
    event.target.parentNode.remove();
  }

  btn.onclick = removeParent;

  function toggleDone() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", toggleDone);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
