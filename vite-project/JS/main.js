import "../css/style.css";
import { albums } from "./albums.js";

const DOMSelectors = {
  header: document.querySelector("h1"),
  container: document.querySelector(".container"),
};

const placeholder = DOMSelectors.container;

albums.forEach((album) => {
  placeholder.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h3 class="card-header">${album.title}</h3>
      <img src="${album.imageLink}" alt="${album.altText}" />
      <h3 class="card-artist">${album.artist}</h3>
    </div>`
  );
});
