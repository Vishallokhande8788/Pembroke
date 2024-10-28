
/* breeds/list/all = All breeds 

breed/{breedName}/images/random
*/
import { capitalize } from "./utils";
//API
const selectEl = document.querySelector("select");
const caroselContainer = document.querySelector(".carousel-inner");

const BASE_URL = `https://dog.ceo/api/`;

// get (images*10) on breed
function getDogBreed() {
  return fetch(`${BASE_URL}breeds/list/all `)
    .then((res) => res.json())
    .then((data) => {
      // console.log(Object.keys(data.message));
      return Object.keys(data.message);
    })
    .catch((error) => console.log(error));
}

function getBreedImages(breed) {
  return fetch(`${BASE_URL}breed/${breed}/images`)
    .then((res) => res.json())
    .then((data) => console.log(data.message.slice(0, 10)))
    .catch((err) => console.log(err));
}

// marl-render
function renderOption() {
  getDogBreed().then((data) => {
    const fragment = document.createDocumentFragment();
    for (let breed of data) {
      const option = document.createElement("option");
      option.textContent = capitalize(breed);
      option.value = breed;
      fragment.appendChild(option);
    }
    selectEl.appendChild(fragment);
  });
}

console.log(selectEl);

let a = selectEl.value;
console.log(a);

function rendercarousel(breed){
  getBreedImages(breed).then((data)=> console.log(data));
}

selectEl.addEventListener("change", (event) => {
  rendercarousel(event.target.value)
  });
;

renderOption();
