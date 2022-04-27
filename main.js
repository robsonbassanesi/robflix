import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js';

const page = Math.floor(Math.random() * 500)
const API_ACCESS = API_KEY;
const API_URL = BASE_URL + "discover/movie?sort_by=popularity.desc&" + API_ACCESS + "&page=" + page;
const BUTTON = document.getElementById('button')
BUTTON.addEventListener('click', getMovies)

getMovies(API_URL)

function getMovies(url) {
  fetch(url).then(Response => Response.json()).then(data => {
    const list = data.results;
    list.map((results) => {
      const name = results.title;
      const poster = results.poster_path;
      const description = results.overview;
      let movieEl = document.getElementById('print-area');
      movieEl.innerHTML = `
        <div id="print-area">
          <img id="movie-poster" src="${IMG_URL + poster}"></img> 
          <div id="print-area-text">
            <p>${name}</p>
            <p>${description}</p>
          </div>
        </div>
      `
    })
  })
}

