// ======= CART POPUP OPEN / CLOSE =======
const cartPopup = document.getElementById('cartPopup');
const openCartBtn = document.getElementById('openCart');
const closeCartBtn = document.getElementById('closeCart');

openCartBtn.addEventListener('click', () => {
    cartPopup.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cartPopup.classList.remove('active');
});

// ======= CART ITEMS =======
const cartItemsContainer = document.getElementById('cartItems');
const cartSubtotal = document.getElementById('cartSubtotal');

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ======= UPDATE CART DISPLAY =======
function renderCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="padding: 20px;">Your cart is empty.</p>';
    }
    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart_item');
        div.innerHTML = `
            <div class="cart_img">
                <img src="${item.image}" alt="">
            </div>
            <div class="cart_info">
                <div class="cart_name">${item.name}</div>
                <div class="cart_qty">
                    <button class="qty_minus">-</button>
                    <input type="number" class="quantity_input" value="${item.qty}" min="1">
                    <button class="qty_plus">+</button>
                </div>
                <div class="price_cart">Rs. ${item.price}</div>
            </div>
            <div class="cart_remove">
                <button class="remove_item">X</button>
            </div>
        `;
        cartItemsContainer.appendChild(div);

        // Quantity Buttons
        const qtyInput = div.querySelector('.quantity_input');
        div.querySelector('.qty_plus').addEventListener('click', () => {
            qtyInput.value = parseInt(qtyInput.value) + 1;
            cart[index].qty = parseInt(qtyInput.value);
            updateCartTotal();
            saveCart();
        });
        div.querySelector('.qty_minus').addEventListener('click', () => {
            if (qtyInput.value > 1) {
                qtyInput.value = parseInt(qtyInput.value) - 1;
                cart[index].qty = parseInt(qtyInput.value);
                updateCartTotal();
                saveCart();
            }
        });

        // Remove item
        div.querySelector('.remove_item').addEventListener('click', () => {
            cart.splice(index, 1);
            renderCart();
            updateCartTotal();
            saveCart();
        });
    });
    updateCartTotal();
}

// ======= UPDATE TOTAL =======
function updateCartTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
    });
    cartSubtotal.textContent = total.toLocaleString();
}

// ======= CLEAR CART =======
document.getElementById('clearCart').addEventListener('click', () => {
    cart = [];
    renderCart();
    updateCartTotal();
    saveCart();
});

// ======= CHECKOUT VIA WHATSAPP =======
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    let message = "Hello, I want to order:\n";
    cart.forEach(item => {
        message += `${item.name} x${item.qty} = Rs.${(item.price * item.qty).toLocaleString()}\n`;
    });
    message += `Total: Rs.${cartSubtotal.textContent}`;
    window.open(`https://wa.me/9779824479482?text=${encodeURIComponent(message)}`, '_blank');
});

// ======= SAVE CART TO LOCALSTORAGE =======
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ======= ADD PRODUCT FUNCTION (example usage) =======
function addToCart(product) {
    const existingIndex = cart.findIndex(item => item.name === product.name);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({...product, qty: 1});
    }
    renderCart();
    saveCart();
}

// ======= INITIAL RENDER =======
renderCart();