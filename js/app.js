let copyProducts = [...products];

const productsConatiner = document.querySelector(".products-container");

function updateUI() {
  if (copyProducts.length < 1) {
    productsConatiner.innerHTML = `<h5>Sorry, no products matched your search</h5>`;
  } else {
    productsConatiner.innerHTML = copyProducts.map((product) => {
      const { id, title, image, price, company } = product;
      return `
     <article class="product">
           <img
               src="${image}"
               class="product-img img"
               alt="${title}"/>
           <footer>
             <h5 class="product-name">${title}</h5>
             <span class="product-price">$${price}</span>
           </footer>
      </article> 
    `;
    });
  }
}
updateUI();

const compaines = document.querySelector(".companies");

function updateButtons() {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  compaines.innerHTML = buttons
    .map((button) => {
      return `
    <button class="company-btn">${button}</button>
    `;
    })
    .join("");
}
updateButtons();

compaines.addEventListener("click", (e) => {
  if (e.target.textContent == "all") {
    copyProducts == [...products];
  } else {
    copyProducts = products.filter((product) => {
      return product.company == e.target.textContent;
    });
  }
  updateUI();
});

const form = document.querySelector(".input-form");
const input = document.querySelector(".search-input");

form.addEventListener("keyup", (e) => {
  copyProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(input.value);
  });
  updateUI();
});

// form['form__input'].addEventListener("input",()=>{
//     const inputValue = form['form__input'].value.toLowerCase()
//     const name = document.querySelectorAll('.user__name')
