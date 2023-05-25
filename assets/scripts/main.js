const mainPage = document.getElementById('mainPage');

data.forEach(item => {
  const productItem = document.createElement('div');
  productItem.classList.add('product');
  productItem.setAttribute('data-id', item.id);
  productItem.innerHTML = `
    <img src="${item.image}" />
    <h3>${item.name}</h3>
    <p>$${item.price}</p>
  `;
  mainPage.appendChild(productItem);
});

const handleClick = (event) => {
   if (event.target.matches('.product')) {
     const productId = event.target.dataset.id;
     window.location.href = `product.html?id=${productId}`;
   }
 };

mainPage.addEventListener('click', handleClick);
 