import { renderUserWord, renderRandomWord, clearSite } from "./render-content";

import "./styles/style.css";

function renderSite() {
  clearSite();
  renderUserWord();
  renderRandomWord();
}

renderSite();
