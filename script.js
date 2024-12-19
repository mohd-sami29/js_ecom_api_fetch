let container = document.querySelector(".container");
let menuList = document.querySelector(".menu-panel-div");
let menuIcon = document.querySelector(".menu-icon-div");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("showList");
  if (menuList.className.includes("showList")) {
    document.getElementById("icon").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("icon").className = "fa-solid fa-bars";
  }
});

fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((data) =>
    data.map((data) => {
      // console.log("data fetched from API", data);

      let cardDiv = document.createElement("div");
      cardDiv.className = "card";
      cardDiv.innerHTML = `<div><h3 class="title">${data.title}</h3></div>
      <div class="image-div"> <img src='${data.image}'></img></div>
      <div class="price-btn-div"><p class="price">Price ${data.price}</p><button class="addToCart-btn">Add to cart</button></div>
      <div><p class="description">${data.description.substring(0, 137) + "..."}</p></div>`;
      container.appendChild(cardDiv);
    })
  );
