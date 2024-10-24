console.log("Connected");

/* breeds/list/all = All breeds 

breed/{breedName}/images/random
*/

//API
const selectEl = document.querySelector("select");

const BASE_URL = `https://dog.ceo/api/`;

function getDogBreed() {
  return fetch(`${BASE_URL}breeds/list/all `)
    .then((res) => res.json())
    .then((data) => {
      // console.log(Object.keys(data.message));
      return Object.keys(data.message);
    })
    .catch((error) => console.log(error));
}

function RenderOption() {
  getDogBreed().then((data) => {
    const fragment = document.createDocumentFragment();
    for (let breed of data) {
      const option = document.createElement("option");
      option.textContent = breed;
      fragment.appendChild(option);
    }
    selectEl.appendChild(fragment);
  });
}
RenderOption();


// H.W

console.log(selectEl);

let a= selectEl.value;
console.log(a);

selectEl.addEventListener('change', function() {
    const selectedOption = selectEl.value;
    console.log(selectedOption); 
});


// console.log(RenderOption())
//console.log(data);
//console.log(RenderOption)
// console.log(a)
// console.log(selectE1);
// let a = document.getElementsByTagName("option");
// console.log(a);

