/**
 * Function to detect the visitor's iOS version and display a message.
 */
function detectIOSVersion() {
    const iOSVersion = parseFloat(
        ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
            .replace('undefined', '3_2').replace('_', '.').replace('_', '')
    );

    let message = "You are using iOS version " + iOSVersion;
    
    // Creating a message element to display the iOS version
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.backgroundColor = '#f0f0f0';
    messageElement.style.color = '#333';
    messageElement.style.padding = '10px';
    messageElement.style.position = 'fixed';
    messageElement.style.bottom = '10px';
    messageElement.style.left = '10px';
    messageElement.style.border = '1px solid #ccc';
    
    // Appending the message element to the body of the webpage
    document.body.appendChild(messageElement);
}

// Call the detectIOSVersion function when the page loads
window.onload = detectIOSVersion;