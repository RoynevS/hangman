import {
  setElementAttributes,
  appendChildrenToElement,
  removeAllChildren,
} from "./utils";
import { gameController } from "./game-controller";

function renderUserWord() {
  const main = document.querySelector("main");
  const leftDiv = document.createElement("div");
  const form = document.createElement("form");
  const label = document.createElement("label");
  const textInput = document.createElement("input");
  const btn = document.createElement("button");

  leftDiv.classList.add("left-div");

  setElementAttributes(label, {
    for: "user-word",
    class: "user-word",
  });
  label.textContent = "Enter a word";

  setElementAttributes(textInput, {
    class: "user-word-input",
    id: "user-word",
    type: "text",
    name: "user-word",
  });

  btn.classList.add("user-word-btn");
  btn.textContent = "Start Game";

  btn.addEventListener("click", changeToGame);

  appendChildrenToElement(form, [label, textInput, btn]);
  leftDiv.appendChild(form);
  main.appendChild(leftDiv);
}

function changeToGame(event) {
  if (event.target.className === "user-word-btn") {
    const word = document.querySelector(".user-word-input").value;
    removeAllChildren("main");
    gameController(word);
    return;
  }
  removeAllChildren("main");
  gameController(404);
}

function changeToSelectScreen() {
  removeAllChildren("main");
  renderUserWord();
  renderRandomWord();
}

function renderRandomWord() {
  const main = document.querySelector("main");
  const rightDiv = document.createElement("div");
  const btn = document.createElement("button");
  const description = document.createElement("h2");

  rightDiv.classList.add("right-div");

  btn.classList.add("random-word-btn");
  btn.textContent = "Start Game";

  description.textContent = "Select random word";

  btn.addEventListener("click", changeToGame);

  appendChildrenToElement(rightDiv, [description, btn]);
  main.appendChild(rightDiv);
}

export { renderUserWord, renderRandomWord };
