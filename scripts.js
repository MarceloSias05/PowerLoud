// A simple shopping cart object
const shoppingCart = {
  items: [],
  addItem: function (item) {
    this.items.push(item);
    console.log(`Item added: ${item}`);
  },
};

// Function to handle the "Add to Cart" button click
function addToCart(event) {
  const button = event.target;
  const product = button.parentElement;
  const productName = product.querySelector("h2").innerText;

  shoppingCart.addItem(productName);
}

// Add click event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".product button");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

/* ... */

document.getElementById("shopping-cart-link").addEventListener("click", function() {
  // Navigate to the list of products or shopping cart page
  window.location.href = "products.html"; // Change "products.html" to the actual path of your products or shopping cart page
});

/* ... */
