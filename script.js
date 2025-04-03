// script.js
function handleClick(button) {
    // Remove the 'clicked' class from all buttons
    document.querySelectorAll('.button').forEach(btn => {
        btn.classList.remove('clicked');
    });

    // Add the 'clicked' class to the clicked button
    button.classList.add('clicked');

    // Store the selected rating in localStorage
    const selectedRating = button.textContent;
    localStorage.setItem('selectedRating', selectedRating);
    console.log("Selected Rating:", selectedRating); // For debugging
}

// Restore the selected rating when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const selectedRating = localStorage.getItem('selectedRating');

    if (window.location.pathname.endsWith('index.html')) {
        // Clear the selected rating when returning to index.html
        localStorage.removeItem('selectedRating');
        document.querySelectorAll('.button').forEach(button => {
            button.classList.remove('clicked');
        });
    } else if (selectedRating) {
        // Display the selected rating on index2.html
        const displayRating = document.getElementById('displayRating');
        if (displayRating) {
            displayRating.textContent = `You selected ${selectedRating} out of five`;
        }
    }

    // Add event listener to the submit link
    const submitLink = document.querySelector('.submit');
    if (submitLink) {
        submitLink.addEventListener('click', (event) => {
            const selectedRating = localStorage.getItem('selectedRating');
            if (!selectedRating) {
                // Prevent the default action (navigation)
                event.preventDefault();
                // Show an alert to the user
                alert('Please select a rating before submitting.');
            }
        });
    }
});