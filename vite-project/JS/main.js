import "../CSS/style.css";
import { albums } from "./albums.js";

const DOMSelectors = {
  header: document.querySelector("h1"),
  container: document.querySelector(".container"),
  filterDropdown: document.querySelectorAll(".filter-dropdown"),
  resetButton: document.querySelector("#reset-button"),
  modeButton: document.querySelector("#mode-button"),
};

const placeholder = DOMSelectors.container;

function albumAdd(album) {
  placeholder.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class="card-header">${album.title}</h2>
      <img src="${album.imageLink}" alt="${album.altText}" />
      <h3 class="card-artist">By: ${album.artist}</h3>
    </div>`
  );
}

function showAlbums(albumsDisplayed) {
  placeholder.replaceChildren(); // getting rid of the albums each time
  albumsDisplayed.forEach((album) => albumAdd(album));
}

showAlbums(albums);

function resetAlbums() {
  showAlbums(albums);
}

const filterMap = {
  //dropdown --> keys in array
  "artist-type": "artistType",
  mood: "mood",
  genre: "genre",
  decade: "decade",
};

function filterAlbums(filterType, filterValue) {
  const filteredAlbums = albums.filter((album) => {
    return album[filterType].includes(filterValue); //if the prop has the text from the dropdown
  });
  showAlbums(filteredAlbums); //only show what matches clicked
}
DOMSelectors.filterDropdown.forEach((dropdown) => {
  const button = dropdown.querySelector("button");
  dropdown.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", (event) => {
      const filterCategory = button.id; //get id from dropdown
      const filterKey = filterMap[filterCategory]; //match it to prop in array
      const filterValue = event.target.textContent; //content in each dropdown

      filterAlbums(filterKey, filterValue);
    });
  });
});

DOMSelectors.resetButton.addEventListener("click", () => {
  resetAlbums();
});

DOMSelectors.modeButton.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
