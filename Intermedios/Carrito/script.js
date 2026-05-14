const products = [
    { id: 1, name: "celular", price: 1500 },
    { id: 2, name: "Laptop", price: 2000 },
    { id: 3, name: "Peluche", price: 200 }
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsC = document.getElementById("products");
const CartC = document.getElementById("cart");
const totalC = document.getElementById("total");


//funcion para mostrar producto
function renderProducts() {
    productsC.innerHTML = "";


    products.forEach(product => {
        const div = document.createElement("div");

        div.innerHTML = `
        ${product.name}- $${product.price}
        <button onclick="addToCart(${product.id})">Agregar</button>`;


        productsC.appendChild(div);
    });
}

// funcion para agregar al carrito 

function addToCart(id) {
    const product = products.find(p => p.id === id);


    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

// mostrar carrito

function renderCart() {
    CartC.innerHTML = "";

    let total = 0;


    cart.forEach(item => {
        const li = document.createElement("li")

        li.innerHTML = `
       ${item.name}
<button onclick="decrease(${item.id})">-</button>
x ${item.quantity}
<button onclick="increase(${item.id})">+</button>
- $${item.price * item.quantity}
         <button onclick="removeFromCart(${item.id})">X</button>`;
        CartC.appendChild(li);

        total += item.price * item.quantity;
    });
    totalC.textContent = `Total:$${total}`;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}


function increase(id) {
    const item = cart.find(p => p.id === id);
    item.quantity++;
    renderCart();
}

function decrease(id) {
    const item = cart.find(p => p.id === id);

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        removeFromCart(id);
    }
    renderCart()
}
renderProducts();
renderCart();