function gameObject(word) {
  let tries = 0;

  const getTries = () => tries;
  const increaseTries = () => tries++;
  const getWord = () => word;
  const splitWord = word.split("");

  let wordState = setStartingEncryption(word);

  const getWordState = () => wordState;

  const checkCharInWord = (char) => {
    if (splitWord.includes(char) || splitWord.includes(char.toUpperCase())) {
      setWordState(char);
    } else {
      increaseTries();
    }
  };

  const setWordState = (char) => {
    splitWord.forEach((element, index) => {
      if (element === char || element === char.toUpperCase())
        wordState[index] = element;
    });
  };

  const checkGameEnd = () => {
    if (!wordState.includes("_")) {
      return "win";
    } else if (getTries() >= 10) {
      return "lose";
    }
    return false;
  };

  return {
    getTries,
    getWord,
    getWordState,
    setWordState,
    checkCharInWord,
    checkGameEnd,
  };
}

function setStartingEncryption(word) {
  return word.split("").map((element) => {
    if (element === " ") return element;
    return "_";
  });
}

export { gameObject };
