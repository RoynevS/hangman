import { setElementAttributes, appendChildrenToElement } from "./utils";

function renderInitialGameState(wordState) {
  const main = document.querySelector("main");
  const gridContainer = document.createElement("div");
  const wordContainer = document.createElement("div");
  const gallowContainer = document.createElement("div");
  const inputContainer = document.createElement("div");

  renderButtons(inputContainer);
  renderWordState(wordState, wordContainer);

  appendChildrenToElement(gridContainer, [
    wordContainer,
    gallowContainer,
    inputContainer,
  ]);
  main.appendChild(gridContainer);
}

function renderWordState(wordState, parent) {
  wordState.forEach((element) => {
    const span = document.createElement("span");
    span.classList.add("char");
    span.textContent = element;
    parent.appendChild(span);
  });
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

export { renderInitialGameState };
