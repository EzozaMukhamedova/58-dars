const wrapperEL = document.querySelector(".wrapper");

// fetchProducts();
// async function fetchProducts() {
//   console.log("Iltimos kuting!");

//   try {
//     const result = await fetch("http://localhost:5000/products");
//     const res = await result.json();

//     console.log("Muvaffaqiyatli yakunlandi");

//     const products = res.data;
//     console.log(products);

//     products.forEach((product) => {
//       wrapperEL.appendChild(
//         createCard(
//           product.image,
//           product.category,
//           product.name,
//           product.description,
//           product.price,
//           product.stock,
//           product.rating
//         )
//       );
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
async function fetchProducts() {
  const pwrapperEL = document.getElementById("product-wrapper");

  try {
    const result = await fetch("https://dummyjson.com/products");
    const res = await result.json();

    console.log("Muvaffaqiyatli yakunlandi");

    const products = res.products;
    console.log(products);

    products.forEach((product) => {
      pwrapperEL.appendChild(
        createCard(
          product.images[0],
          product.category,
          product.title,
          // product.description,
          product.price,
          product.stock,
          product.rating
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
}

function createCard(image, category, title, description, price, stock, rating) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
      <img src="${image}" alt="${title}">
      <h3>${title}</h3>
      <p>${description}</p>
      <p>Category: ${category}</p>
      <p>Price: $${price.toFixed(2)}</p>
      <p>Stock: ${stock}</p>
      <p>Rating: ${rating}</p>
  `;

  return card;
}

fetchProducts();

function createCard(img, category, title, description, price, stock, rating) {
  const newElement = document.createElement("div");
  newElement.classList.add("card");

  newElement.innerHTML = `

      <div class="img-container">
      <img src="${img}" alt="" />
        </div>
      <span class="foyda">Foyda</span>
      <i class="heart fa-regular fa-heart"></i>
      <p class="card__price">${category}</p>
      <h3 class="card__title">${title}</h3>
      <p class="card__desc">${description}</p>
      <span class="rating card__price"><i class="icon fa-solid fa-star"></i> ${rating}</span>
      <p class="price card__price">${price} so'm</p>
      <span class="stock card__price"> <i class="box fa-solid fa-boxes-stacked"></i> ${stock}</span>
    `;

  const heartIcon = newElement.querySelector(".heart");
  heartIcon.addEventListener("mouseover", function () {
    this.classList.remove("fa-regular", "fa-heart");
    this.classList.add("fa-solid", "fa-heart");
  });
  heartIcon.addEventListener("mouseout", function () {
    this.classList.remove("fa-solid", "fa-heart");
    this.classList.add("fa-regular", "fa-heart");
  });

  return newElement;
}

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");
  let autoDelay = 3000;
  let autoSlideInterval;

  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  function nextItem() {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextItem, autoDelay);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  document.querySelector(".prev").addEventListener("click", () => {
    stopAutoSlide();
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
    startAutoSlide();
  });

  document.querySelector(".next").addEventListener("click", () => {
    stopAutoSlide();
    nextItem();
    startAutoSlide();
  });

  startAutoSlide();
});
