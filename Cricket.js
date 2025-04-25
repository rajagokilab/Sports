function updateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // Example: Deal ends in 3 days
    targetDate.setHours(8, 9, 59, 999); // Example: Ends at 08:09:59

    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');

    if (difference < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = '<div class="text-danger">Deal Ended!</div>';
        document.getElementById('shopNowBtn').disabled = true;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
// Byunow
  function buyNow() {
    // Redirect to the Buy Now page
    window.location.href = "cart.html"; // Replace with your actual Buy Now/Checkout page
  }


