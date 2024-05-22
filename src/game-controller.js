import { gameObject } from "./game-object";
import { renderInitialGameState } from "./render-game";
import getRandomWord from "./get-random-word";

async function gameController(mode) {
  const word = mode === 404 ? await getRandomWord() : mode;
  // console.log(word);
  const game = gameObject(word);
  renderInitialGameState(game.getWordState());
}

export { gameController };
