import { gameObject } from "./game-object";
import getRandomWord from "./get-random-word";
import { renderUserWord, renderRandomWord } from "./render-content";
import {
  setElementAttributes,
  appendChildrenToElement,
  removeAllChildren,
} from "./utils";
import image0 from "./images/0.png";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";
import image8 from "./images/8.png";
import image9 from "./images/9.png";
import image10 from "./images/10.png";

async function gameController(mode) {
  const word = mode === 404 ? await getRandomWord() : mode;
  const game = gameObject(word);

  const main = document.querySelector("main");
  const gridContainer = document.createElement("div");
  const wordContainer = document.createElement("div");
  const gallowContainer = document.createElement("div");
  const inputContainer = document.createElement("div");

  wordContainer.classList.add("word-container");
  gallowContainer.classList.add("gallow-container");

  renderButtons(inputContainer);

  const clickHandler = (event) => {
    if (event.target.dataset.char) {
      playRound(event.target.dataset.char);
    }
  };

  const playRound = (selectedChar) => {
    game.checkCharInWord(selectedChar);
    renderWordState(game.getWordState(), wordContainer);
    renderGallow(game.getTries(), gallowContainer);
    const gameState = game.checkGameEnd();
    if (gameState === "win" || gameState === "lose") {
      renderModal(gameState, word);
    }
  };

  inputContainer.addEventListener("click", clickHandler);

  appendChildrenToElement(gridContainer, [
    wordContainer,
    gallowContainer,
    inputContainer,
  ]);
  main.appendChild(gridContainer);

  renderWordState(game.getWordState(), wordContainer);
}

function renderWordState(wordState, parent) {
  removeAllChildren(`.${parent.className}`);
  wordState.forEach((element) => {
    const span = document.createElement("span");
    span.classList.add("char");
    span.textContent = element;
    parent.appendChild(span);
  });
}

function renderGallow(tries, parent) {
  const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  removeAllChildren(`.${parent.className}`);
  const gallow = new Image(256, 256);
  gallow.src = images[tries];
  parent.appendChild(gallow);
}

function renderModal(state, word) {
  removeAllChildren("[data-modal]");
  const modal = document.querySelector("[data-modal]");
  const message = document.createElement("h2");
  const wordDisplay = document.createElement("p");
  const para = document.createElement("p");
  const startBtn = document.createElement("button");

  startBtn.classList.add("back-btn");
  startBtn.textContent = "Back to Start";

  wordDisplay.textContent = word;

  para.textContent = "To play another round click the button";

  if (state === "win") {
    message.textContent = "Congratulations! You guessed the word";
  } else if (state === "lose") {
    message.textContent = "Sorry! The word was:";
  }

  startBtn.addEventListener("click", () => {
    modal.close();
    removeAllChildren("main");
    renderUserWord();
    renderRandomWord();
  });
  appendChildrenToElement(modal, [message, wordDisplay, para, startBtn]);
  modal.showModal();
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

export { gameController };
