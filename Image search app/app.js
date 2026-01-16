const key = "jJXGFB8FuX6CMYAc7lgHfdTEia7dxceCmVFlQbZ8DibMAm0ce7lFi0zW"; // 🔑 put your key here

const photos = document.querySelector(".photos");
const searchInput = document.querySelector(".search");
const btn = document.querySelector(".btn-1");
const more = document.querySelector(".more");

let page = 1;
let currentSearch = "nature";

// Search button
btn.addEventListener("click", () => {
  page = 1;
  photos.innerHTML = "";
  currentSearch = searchInput.value;
  loadPhotos(currentSearch);
});

// Load more button
more.addEventListener("click", () => {
  page++;
  loadPhotos(currentSearch);
});


function loadPhotos(term) {
  const url=term ? 
    `https://api.pexels.com/v1/search?query=${term}&per_page=10&page=${page}`
    : `https://api.pexels.com/v1/curated?per_page=10&page${page}`
    fetch(url,{
          headers: {
        Authorization: key,  
          }
    })
    .then((response) => response.json())
    .then((data) => {
      data.photos.forEach((image) => {
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("jsphoto");

        imgDiv.innerHTML = `
          <p>${image.photographer}</p>
          <img src="${image.src.medium}" alt="image">
          <a href="${image.src.original}" target="_blank">Download</a>
        `;

        photos.appendChild(imgDiv);
      });
    })
    .catch((error) => console.log(error));
}
loadPhotos();