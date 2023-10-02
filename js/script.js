// Get references to the buttons and the cookie consent banner
const acceptAllButton = document.getElementById('acceptAll');
const acceptNecessaryButton = document.getElementById('acceptNecessary');
const cookiesBanner = document.querySelector('.cookies');

// Function to close the cookie consent banner
function closeBanner() {
    cookiesBanner.style.display = 'none';
}

// Add click event listeners to the buttons
acceptAllButton.addEventListener('click', () => {
    // Set cookies to accept all
    // You can add your code here to set cookies as needed

    // Close the banner
    closeBanner();
});

acceptNecessaryButton.addEventListener('click', () => {
    // Set cookies to accept necessary only
    // You can add your code here to set necessary cookies

    // Close the banner
    closeBanner();
});
