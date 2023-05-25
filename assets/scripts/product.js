const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const product = data.find(item => item.id.toString() === productId);

const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productImage = document.getElementById('productImage');
const productInfo = document.getElementById('productInfo');
if (product) {
  productName.innerText = product.name;
  productPrice.innerText = `$${product.price}`;
  productImage.src = product.image;
  productInfo.innerText = product.info;
} else {
  productName.innerText = 'Product Not Found';
}
