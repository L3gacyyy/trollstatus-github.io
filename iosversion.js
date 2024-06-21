function detectIOSVersion() {
    const iOSVersion = parseFloat(
        ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
            .replace('undefined', '3_2').replace('_', '.').replace('_', '')
    );

    	function displayJpgPicture(userAgent) {
    // Check if the user agent indicates iOS and the version is between 1 and 16.5.1
    if (/iP(hone|od|ad)/.test(userAgent) && /OS\s([\_0-9]+)/.test(userAgent)) {
        let version = userAgent.match(/OS\s([\_0-9]+)/)[1].replace(/_/g, '.');
        let versionNumber = parseFloat(version);
 
        if (versionNumber >= 1 && versionNumber <= 16.5) {
            // Display the jpg picture
            console.log("Displaying jpg picture for iOS version 1 to 16.5.1");
        } else {
            console.log("iOS version is not within the specified range.");
        }
    } else {
        console.log("Visitor is not using an iOS device.");
    };

    let message = "You are using iOS version " + iOSVersion;
    
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.backgroundColor = '#f0f0f0';
    messageElement.style.color = '#333';
    messageElement.style.padding = '10px';
    messageElement.style.position = 'fixed';
    messageElement.style.bottom = '10px';
    messageElement.style.left = '10px';
    messageElement.style.border = '1px solid #ccc';
  
    document.body.appendChild(messageElement);
}

window.onload = detectIOSVersion;
