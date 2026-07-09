let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const cartItems =
document.getElementById("cartItems");

const totalElement =
document.getElementById("cartTotal");

function renderCart(){

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

const qty = item.qty || 1;

total += item.price * qty;

cartItems.innerHTML += `

<div class="cart-item">

<img
src="${item.image}"
width="120">

<div class="cart-details">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<div class="qty-box">

<button onclick="decreaseQty(${index})">
-
</button>

<span>${qty}</span>

<button onclick="increaseQty(${index})">
+
</button>

</div>

<button
class="remove-btn"
onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

`;

});

totalElement.innerText =
`Total: ₹${total}`;

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

}

function increaseQty(index){

cart[index].qty =
(cart[index].qty || 1) + 1;

renderCart();

}

function decreaseQty(index){

if((cart[index].qty || 1) > 1){

cart[index].qty--;

renderCart();

}

}

function removeItem(index){

cart.splice(index,1);

renderCart();

}

renderCart();