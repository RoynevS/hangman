import { setElementAttributes, appendChildrenToElement } from "./utils";
import { gameObject } from "./game-object";

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
    clearSite();
    renderGame(word);
    return;
  }
  clearSite();
  renderGame(404);
}

function changeToSelectScreen() {
  clearSite();
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

function renderGame(word) {
  const main = document.querySelector("main");
  const gridContainer = document.createElement("div");
  const wordContainer = document.createElement("div");
  const gallowContainer = document.createElement("div");
  const inputContainer = document.createElement("div");

  renderButtons(inputContainer);

  appendChildrenToElement(gridContainer, [
    wordContainer,
    gallowContainer,
    inputContainer,
  ]);
  main.appendChild(gridContainer);
}

function renderButtons(parent) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  alphabet.forEach((char) => {
    const inputBtn = document.createElement("button");
    inputBtn.textContent = char;
    setElementAttributes(inputBtn, {
      class: "input-btn",
      "data-char": char,
    });
    parent.appendChild(inputBtn);
  });
}

function clearSite() {
  const main = document.querySelector("main");
  main.replaceChildren();
}

export { renderUserWord, renderRandomWord, clearSite };
