const searchForm = document.querySelector(".search-form");
const searchBtn = searchForm.querySelector(".search-btn");
const searchInput = searchForm.querySelector("#search");
const browserSelect = document.querySelector(".browser");

let browser = "google";

function googleSearch(event) {
    event.preventDefault();
    if(searchInput.value !== null) {

    if(browser === "google") {
        location.href=`https://www.google.com/search?q=${searchInput.value}`;
    } else if(browser === "bing") {
        location.href=`https://www.bing.com/search?q=${searchInput.value}`;
    } else {
        location.href=`https://duckduckgo.com/?q=${searchInput.value}`;
    }

    searchInput.value = "";
  }
}

function browserChange() {
    browser = browserSelect.value;
}

function init() {
    searchForm.addEventListener('submit', googleSearch);
    searchBtn.addEventListener('click', googleSearch);
    browserSelect.addEventListener('input', browserChange);
}

init();