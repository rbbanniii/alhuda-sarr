if(
localStorage.getItem(
"adminLoggedIn"
) !== "true"
){

window.location.href =
"admin-login.html";

}

const orders =
JSON.parse(
localStorage.getItem(
"orders"
)
) || [];

document.getElementById(
"totalOrders"
).innerText =
orders.length;

const container =
document.getElementById(
"ordersContainer"
);

orders.forEach(order=>{

container.innerHTML += `

<div class="order-card">

<h3>

${order.orderId}

</h3>

<p>

${order.customerName}

</p>

<p>

${order.customerPhone}

</p>

<p>

Status:
<span>

${order.status}

</span>

</p>

<select
onchange="
updateStatus(
'${order.orderId}',
this.value
)
">

<option>

Pending

</option>

<option>

Shipped

</option>

<option>

Delivered

</option>

</select>

</div>

`;

});

function updateStatus(
orderId,
status
){

const orders =
JSON.parse(
localStorage.getItem(
"orders"
)
) || [];

const order =
orders.find(
o=>o.orderId===orderId
);

if(order){

order.status =
status;

localStorage.setItem(
"orders",
JSON.stringify(
orders
)
);

location.reload();

}

}



// admin product logic


let adminProducts =
JSON.parse(
localStorage.getItem(
"adminProducts"
)
) || [];

const productForm =
document.getElementById(
"productForm"
);

const adminProductsDiv =
document.getElementById(
"adminProducts"
);

function renderProducts(){

adminProductsDiv.innerHTML = "";

adminProducts.forEach((p,index)=>{

adminProductsDiv.innerHTML += `

<div class="admin-product">

<div>

<h3>${p.name}</h3>

<p>₹${p.price}</p>

</div>

<button
class="delete-product"
onclick="deleteProduct(${index})">

Delete

</button>

</div>

`;

});

}

productForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const product = {

id:Date.now(),

name:
document.getElementById(
"productName"
).value,

price:
document.getElementById(
"productPrice"
).value,

color:
document.getElementById(
"productColor"
).value,

fabric:
document.getElementById(
"productFabric"
).value,

occasion:
document.getElementById(
"productOccasion"
).value,

image:
document.getElementById(
"productImage"
).value

};

adminProducts.push(product);

localStorage.setItem(
"adminProducts",
JSON.stringify(
adminProducts
)
);

productForm.reset();

renderProducts();

});

function deleteProduct(index){

adminProducts.splice(index,1);

localStorage.setItem(
"adminProducts",
JSON.stringify(
adminProducts
)
);

renderProducts();

}

renderProducts();