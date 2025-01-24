const wrapperEL = document.querySelector(".wrapper");

fetchProducts();
async function fetchProducts() {
  console.log("Iltimos kuting!");

  try {
    const result = await fetch("http://localhost:5000/products");
    const res = await result.json();

    console.log("Muvaffaqiyatli yakunlandi");

    const products = res.data;
    console.log(products);

    products.forEach((product) => {
      wrapperEL.appendChild(
        createCard(
          product.image,
          product.category,
          product.name,
          product.description,
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
