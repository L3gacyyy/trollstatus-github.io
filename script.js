function createMovingBackground() {
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            background: linear-gradient(135deg, #FFA07A, #FF6347);
            background-size: 400% 400%;
            animation: gradientAnimation 15s ease infinite;
        }

        @keyframes gradientAnimation {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    `;

    document.head.appendChild(style);
}

// Call the function to create the moving orange-gradient background effect
createMovingBackground();
