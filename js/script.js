// // ketika humberger menu di click
// const navbarNav = document.querySelector(".navbar-nav");
// const hamburgerMenu = document.querySelector("#hamburger-menu");
// hamburgerMenu.addEventListener("click", () => {
//   navbarNav.classList.toggle("active");
// });

// // ketika search di click
// const searchButton = document.querySelector("#search");
// const searchInput = document.querySelector(".search-form");
// const searchBox = document.querySelector("#search-box");
// searchButton.addEventListener("click", () => {
//   searchInput.classList.toggle("active");
//   searchBox.focus();
// });

// // ketika shopping cart di click
// const shoppingCart = document.querySelector(".shopping-cart");
// const shoppingCartButton = document.querySelector("#shopping-cart");
// shoppingCartButton.addEventListener("click", e => {
//   shoppingCart.classList.toggle("active");
//   e.preventDefault();
// });

// // ketika click di luar element
// document.addEventListener("click", function (e) {
//   const hamburgerMenu = document.querySelector("#hamburger-menu");
//   const navbarNav = document.querySelector(".navbar-nav");

//   if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }

//   if (!searchButton.contains(e.target) && !searchBox.contains(e.target)) {
//     searchInput.classList.remove("active");
//     searchBox.blur(); // ketika di click diluar search box, focus dihilangkan
//   }

//   const shoppingCartR = document.querySelector(".shopping-cart");
//   const shoppingCartButtonR = document.querySelector("#shopping-cart");

//   if (
//     !shoppingCartR.contains(e.target) &&
//     !shoppingCartButtonR.contains(e.target)
//   ) {
//     shoppingCart.classList.remove("active");
//     shoppingCartButton.blur();
//   }
// });

// // modal detail button product
// const product = document.querySelector("#product");
// const productDetailButtons = document.querySelectorAll(".item-detail-button");
// const productDetailModal = document.querySelector("#item-detail-modal");
// productDetailButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     productDetailModal.style.display = "flex";
//   });
// });

// // ketika button modal close diclick
// // Dapatkan referensi elemen
// const closeModal = document.querySelector(".close-icons");
// closeModal.addEventListener("click", () => {
//   productDetailModal.style.display = "none";
// });

// // clicl di luar modal
// const modal = document.querySelector(".modal");
// modal.addEventListener("click", e => {
//   if (e.target.classList.contains) {
//     if (
//       e.target.classList.contains("modal") ||
//       e.target.classList.contains("close-icons")
//     ) {
//       productDetailModal.style.display = "none";
//     }
//   }
// });

// CODE DI ATAS ADALAH BUATAN CODE SAYA SEBELUM DI RIFECTORING OLEH AI WHEHEHE
// DAN CODE DI BAWAH SETELAH DI RIFECTORING OLEH AI WHEHEHE
// Helper function to toggle class
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// Toggle navbar menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  toggleClass(navbarNav, "active");
});

// Toggle search form
const searchButton = document.querySelector("#search");
const searchInput = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
searchButton.addEventListener("click", () => {
  toggleClass(searchInput, "active");
  searchBox.focus();
});

// Toggle shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartButton = document.querySelector("#shopping-cart");
shoppingCartButton.addEventListener("click", e => {
  toggleClass(shoppingCart, "active");
  e.preventDefault();
});

// Close elements when clicking outside
document.addEventListener("click", e => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchInput.contains(e.target)) {
    searchInput.classList.remove("active");
    searchBox.blur();
  }

  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Modal for product details
const productDetailButtons = document.querySelectorAll(".item-detail-button");
const productDetailModal = document.querySelector("#item-detail-modal");
const closeModal = document.querySelector(".close-icons");

productDetailButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    productDetailModal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  productDetailModal.style.display = "none";
});

const modal = document.querySelector(".modal");
modal.addEventListener("click", e => {
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("close-icons")
  ) {
    productDetailModal.style.display = "none";
  }
});
