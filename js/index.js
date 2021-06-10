// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  let valorPrice = price.innerText;
  let newSubtotal = Number(valorPrice) * quantity;

  subtotal.innerText = newSubtotal;

  return newSubtotal;
}

function calculateAll() {
  // ITERATION 2
  let allProducts = document.querySelectorAll(`.product`);

  let sum = 0;

  allProducts.forEach((product) => {
    updateSubtotal(product);
    sum += parseFloat(product.querySelector('.subtotal span').innerHTML);
    return sum;
  });

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerText = sum;
  console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentElement;
  const grandParent = parent.parentElement;
  const greatGrandParent = grandParent.parentElement;

  greatGrandParent.removeChild(grandParent);
}

// ITERATION 5
console.log(document.querySelector('.product'));
function createProduct() {
  /*const createName = document.querySelector('.product name').value;

  const createPrice = document.querySelector('.price').value;

  const tableBody = document.querySelector('#table-body');
  const newRow = document.createElement('tr');
  tableBody.appendChild(newRow);
  newRow.classList.add('product');

  newRow.innerHTML = `
    <td class="name">
      <span>${createName}</span>
    </td>
    <td class="price">$<span>${createPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" id = "myInput"/>
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  document.querySelector('#productName').value = '';
  document.querySelector('#productPrice').value = '';*/
  /*const productInput = document.getElementById('new-product-name');
  const priceInput = document.getElementById('new-product-price');
  const listaNewPro = document.getElementById('new-product-list');

  listaNewPro.innerHTML += `<tr class="product">
      <td class="name">
        <span>${productInput.value}</span>
      </td>
      <td class="price">
        $<span>${priceInput.value}</span>
      </td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">
        $<span>0</span>
      </td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`;
  productInput.value = '';
  priceInput.value = 0;*/
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let allRemoveButtons = document.querySelectorAll(`.btn-remove`);
  allRemoveButtons.forEach((btn) => {
    btn.addEventListener(`click`, removeProduct);
  });

  /*const addButton = document.getElementById('create');
  addButton.onclick = createProduct;*/
});
