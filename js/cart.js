function getCart(){

return JSON.parse(
localStorage.getItem("cart")
) || [];

}

function saveCart(cart){

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

}

function updateCartCount(){

const cart = getCart();

const countElement =
document.getElementById("cartCount");

if(countElement){

countElement.innerText =
cart.length;

}

}

updateCartCount();