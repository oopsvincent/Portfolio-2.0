document.addEventListener('DOMContentLoaded', () => {
    let cart = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    if (addToCartButtons) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productElement = event.target.closest('.product');
                const productId = productElement.dataset.id;
                const productTitle = productElement.querySelector('h2').innerText;
                const productPrice = parseFloat(productElement.querySelector('.price').innerText.replace('$', ''));

                const product = {
                    id: productId,
                    title: productTitle,
                    price: productPrice
                };

                cart.push(product);
                updateCart();
            });
        });
    }

    function updateCart() {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            let total = 0;

            cart.forEach(product => {
                const cartItem = document.createElement('li');
                cartItem.innerText = `${product.title} - $${product.price.toFixed(2)}`;
                cartItemsContainer.appendChild(cartItem);
                total += product.price;
            });

            if (totalPriceElement) {
                totalPriceElement.innerText = total.toFixed(2);
            }
        }
    }

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Order placed successfully!');
            cart = [];
            updateCart();
            checkoutForm.reset();
        });
    }
});