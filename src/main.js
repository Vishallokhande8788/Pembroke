console.log("Connected");

/* breeds/list/all = All breeds 

breed/{breedName}/images/random
*/
import { capitalize } from "./utils";
//API
const selectEl = document.querySelector("select");
const imgEl = document.querySelector("img");

const BASE_URL = `https://dog.ceo/api/`;

// get single imag eon breed
function getDogBreed() {
  return fetch(`${BASE_URL}breeds/list/all `)
    .then((res) => res.json())
    .then((data) => {
      // console.log(Object.keys(data.message));
      return Object.keys(data.message);
    })
    .catch((error) => console.log(error));
}

function getSingleImage(breed) {
  return fetch(`${BASE_URL}breed/${breed}/images/random`)
    .then((res) => res.json())
    .then((data) => data.message)
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
renderOption();

console.log(selectEl);

let a = selectEl.value;
console.log(a);

selectEl.addEventListener("change", (event) => {
  getSingleImage(event.target.value).then((data) => {
    imgEl.src = data;
  });
});
