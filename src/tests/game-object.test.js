import { gameObject } from "../game-object";

describe("", () => {
  const word = "tribute";
  const game = gameObject(word);

  test("return word", () => {
    expect(game.getWord()).toBe("tribute");
  });

  test("return starting state", () => {
    expect(game.getWordState()).toEqual(["_", "_", "_", "_", "_", "_", "_"]);
  });

  test("return starting state multi words", () => {
    const newGame = gameObject("hello world");
    expect(newGame.getWordState()).toEqual([
      "_",
      "_",
      "_",
      "_",
      "_",
      " ",
      "_",
      "_",
      "_",
      "_",
      "_",
    ]);
  });

  test("check for char in word", () => {
    game.checkCharInWord("t");
    expect(game.getWordState()).toEqual(["t", "_", "_", "_", "_", "t", "_"]);
  });

  test("check for char not in word", () => {
    game.checkCharInWord("a");
    expect(game.getTries()).toBe(1);
  });

  test("check for not game end", () => {
    expect(game.checkGameEnd()).toBe(false);
  });

  test("check for game end by getting the answer", () => {
    const newGame = gameObject(word);
    newGame.checkCharInWord("t");
    newGame.checkCharInWord("r");
    newGame.checkCharInWord("i");
    newGame.checkCharInWord("b");
    newGame.checkCharInWord("u");
    newGame.checkCharInWord("e");
    expect(newGame.checkGameEnd()).toBe("win");
  });

  test("check for game end by not having tries left", () => {
    const newGame = gameObject(word);
    newGame.checkCharInWord("a");
    newGame.checkCharInWord("c");
    newGame.checkCharInWord("d");
    newGame.checkCharInWord("f");
    newGame.checkCharInWord("g");
    newGame.checkCharInWord("h");
    newGame.checkCharInWord("j");
    newGame.checkCharInWord("k");
    newGame.checkCharInWord("l");
    newGame.checkCharInWord("m");
    expect(newGame.checkGameEnd()).toBe("lose");
  });
});
