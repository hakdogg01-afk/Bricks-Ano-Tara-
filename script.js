const products = [
  { name: "Cinnamoroll Brick", price: 299, img: "images/cinnamoroll.jpg" },
  { name: "Daisy Duck Brick", price: 349, img: "images/daisyduck.jpg" },
  { name: "Angel from Lilo and Stitch", price: 399, img: "images/angel.jpg" },
  { name: "Donald Duck Brick", price: 329, img: "images/donaldduck.jpg" },
  { name: "Dumbo Brick", price: 329, img: "images/dumbo.jpg" },
  { name: "Judy Hopps Zootopia Brick", price: 329, img: "images/judy.jpg" },
  { name: "Stella Lou Brick", price: 329, img: "images/stellalou.jpg" }
];

let cart = [];

function displayProducts() {
  let container = document.getElementById("product-list");

  products.forEach((p, i) => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₱${p.price}</p>
        <button onclick="addToCart(${i})">Add</button>
      </div>
    `;
  });
}

function addToCart(i) {
  let found = cart.find(item => item.name === products[i].name);

  if (found) {
    found.qty++;
  } else {
    cart.push({...products[i], qty:1});
  }

  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    list.innerHTML += `
      <li>
        ${item.name} x${item.qty}
        <button onclick="removeItem(${index})">❌</button>
      </li>
    `;
    total += item.price * item.qty;
  });

  document.getElementById("total").innerText = total;
}

function removeItem(i) {
  cart.splice(i,1);
  updateCart();
}

function toggleCart() {
  let c = document.getElementById("cart");
  c.style.right = c.style.right === "0px" ? "-350px" : "0px";
}

function openCheckout() {
  document.getElementById("checkout").style.display = "flex";
}

function closeCheckout() {
  document.getElementById("checkout").style.display = "none";
}

function placeOrder() {
  alert("🔥 Order Successful! Welcome to BrickSavvy.");
  cart = [];
  updateCart();
  closeCheckout();
}

function scrollToProducts() {
  document.getElementById("product-list").scrollIntoView();
}

displayProducts();