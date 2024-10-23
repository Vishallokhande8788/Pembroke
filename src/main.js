console.log("Connected");

/* breeds/list/all = All breeds 

breed/{breedName}/images/random
*/

//API
const selectE1 = document.querySelector("select");

console.log("start");
const BASE_URL = `https://dog.ceo/api/`;

function getDogBreed() {
  return fetch(`${BASE_URL}breeds/list/all `)
    .then((res) => res.json())
    .then((data) => {
      console.log(Object.keys(data.message));
      return Object.keys(data.message);
    })
    .catch((error) => console.log(error));
}

console.log("end");
function RenderOption() {
  getDogBreed().then((data) => {
    const fragment = document.createDocumentFragment();
    for (let breed of data) {
      const option = document.createElement("option");
      option.textContent = breed;
      fragment.appendChild(option);
    }
    selectE1.appendChild(fragment);
  });
}
RenderOption();
