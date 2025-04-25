function incrementQuantity() {
    let quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function addToCart() {
    alert('Added to cart!');
    // You would typically implement actual cart logic here
}

function addToWishlist() {
    alert('Added to wishlist!');
    // You would typically implement actual wishlist logic here
}

// You would need to provide the actual image file (football.jpg)
// or replace the src attribute with a URL to an online image.