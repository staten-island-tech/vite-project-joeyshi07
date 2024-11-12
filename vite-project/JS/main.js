import "../css/style.css";
import { albums } from "./albums.js";

const DOMSelectors = {
  header: document.querySelector("h1"),
  container: document.querySelector(".container"),
  filterDropdown: document.querySelectorAll(".filter-dropdown"),
};

const placeholder = DOMSelectors.container;

function albumAdd(album) {
  placeholder.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h3 class="card-header">${album.title}</h3>
      <img src="${album.imageLink}" alt="${album.altText}" />
      <h3 class="card-artist">${album.artist}</h3>
    </div>`
  );
}

function showAlbums(albumsDisplayed) {
  placeholder.replaceChildren();
  albumsDisplayed.forEach((album) => albumAdd(album));
}

showAlbums(albums);

const filterMap = {
  "artist-type": "artistType",
  mood: "mood",
  genre: "genre",
  decade: "decade",
};

function filterAlbums(filterType, filterValue) {
  const filteredAlbums = albums.filter((album) => {
    return filterValue === "all" || album[filterType].includes(filterValue);
  });
  showAlbums(filteredAlbums);
}

DOMSelectors.filterDropdown.forEach((dropdown) => {
  const button = dropdown.querySelector("button");
  dropdown.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", (event) => {
      const filterCategory = button.id;
      const filterKey = filterMap[filterCategory];
      const filterValue = event.target.textContent;

      filterAlbums(filterKey, filterValue);
    });
  });
});
