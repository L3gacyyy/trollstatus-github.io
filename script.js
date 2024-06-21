/**
 * Function to create a moving orange-gradient background that covers the whole display.
 */
function createMovingBackground() {
    const body = document.querySelector('body');

    // Create a <style> element to hold the CSS animation
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            background: linear-gradient(45deg, orange, yellow, orange, yellow); /* Define the gradient colors */
            background-size: 400% 400%; /* Size of the gradient background */
            animation: gradientAnimation 15s ease infinite; /* Animation properties */
        }

        @keyframes gradientAnimation {
            0% {
                background-position: 0% 50%; /* Initial background position */
            }
            50% {
                background-position: 100% 50%; /* Midway background position */
            }
            100% {
                background-position: 0% 50%; /* Final background position */
            }
        }
    `;

    // Append the <style> element to the <body> to apply the animation
    body.appendChild(style);
}

// Call the function to create the moving orange-gradient background
createMovingBackground();
