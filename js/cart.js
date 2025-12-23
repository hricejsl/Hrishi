// ======= CART DATA =======
let cart = [];

// ======= DOM ELEMENTS =======
const cartPopup = document.getElementById('cartPopup');
const cartItems = document.getElementById('cartItems');
const cartSubtotal = document.getElementById('cartSubtotal');
const openCartBtn = document.getElementById('openCart');
const closeCartBtn = document.getElementById('closeCart');
const clearCartBtn = document.getElementById('clearCart');
const checkoutBtn = document.getElementById('checkoutBtn');

// ======= OPEN / CLOSE CART POPUP =======
openCartBtn.addEventListener('click', () => {
    cartPopup.style.display = 'block';
    renderCart();
});

closeCartBtn.addEventListener('click', () => {
    cartPopup.style.display = 'none';
});

// ======= ADD PRODUCT TO CART =======
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    renderCart();
}

// ======= RENDER CART =======
function renderCart() {
    cartItems.innerHTML = ''; // Clear previous
    let subtotal = 0;

    if(cart.length === 0){
        cartItems.innerHTML = '<p style="text-align:center; padding:20px;">Your cart is empty!</p>';
        cartSubtotal.textContent = '0';
        return;
    }

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart_item';
        div.innerHTML = `
            <div class="cart_img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart_info">
                <a href="#">${item.name}</a>
                <div class="quantity_buttons">
                    <button onclick="decreaseQty(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQty(${item.id})">+</button>
                </div>
                <span>Rs. ${item.price * item.quantity}</span>
            </div>
            <div class="cart_remove">
                <button onclick="removeItem(${item.id})">X</button>
            </div>
        `;
        cartItems.appendChild(div);
    });

    cartSubtotal.textContent = subtotal;
}

// ======= INCREASE / DECREASE / REMOVE =======
function increaseQty(id) {
    const item = cart.find(i => i.id === id);
    if(item) item.quantity += 1;
    renderCart();
}

function decreaseQty(id) {
    const item = cart.find(i => i.id === id);
    if(item) {
        item.quantity -= 1;
        if(item.quantity <= 0) removeItem(id);
    }
    renderCart();
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    renderCart();
}

// ======= CLEAR ALL =======
clearCartBtn.addEventListener('click', () => {
    cart = [];
    renderCart();
});

// ======= CHECKOUT VIA WHATSAPP =======
checkoutBtn.addEventListener('click', () => {
    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    let message = 'Hello! I want to order:\n';
    cart.forEach(item => {
        message += `${item.name} x ${item.quantity} = Rs.${item.price * item.quantity}\n`;
    });
    message += `Total: Rs.${cart.reduce((a,b)=>a+b.price*b.quantity,0)}`;

    const whatsappUrl = `https://wa.me/9779824479482?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});