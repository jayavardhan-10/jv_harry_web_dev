// 13. The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

document.querySelector(".addproduct").addEventListener("click", () => {

    const productDiv = document.createElement('div'); //creating a div element in productDiv variable
    productDiv.classList.add('product-item'); //giving it a class named: "product-item"
    productDiv.innerHTML = `
                <label>Product Name: <input type="text" class="product-name" required></label>
                <label>Price: <input type="number" class="product-price"  required></label>
                <label>Quantity: <input type="number" class="product-quantity" min="1" required></label>
                <button type="button" class="remove-product">Remove</button>
            `;// here in the div, you gave this content
    //at last you append this into the PRODUCTS DIV..
    document.getElementById('products').appendChild(productDiv);

    productDiv.querySelector(".remove-product").addEventListener("click", () => {
        productDiv.remove();//removes the product div
    })
})

document.querySelector("#cartForm").addEventListener("submit", function (event) {

    event.preventDefault();
    let totalCost = 0;

    const productitems = document.querySelectorAll(".product-item");

    productitems.forEach(item => {

        const price = parseInt(item.querySelector(".product-price").value);
        const quantity = parseInt(item.querySelector(".product-quantity").value);

        totalCost += price * quantity;
    })

    document.getElementById("totalCost").innerText = `Total: ₹${totalCost.toFixed(2)}`;

})

document.querySelector(".clear-all").addEventListener("click", () => {
    //clear all items

    const productItems = document.querySelectorAll(".product-item");
    productItems.forEach(item => item.remove()); //remove all
})