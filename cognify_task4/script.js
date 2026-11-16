```javascript
// Select the button from the HTML page
const button = document.getElementById('colorBtn');

// Array of random background colors
const colors = ['#f4f6f9', '#d1f2eb', '#fadbd8', '#fcf3cf', '#ebdef0'];

// Add an event listener for the 'click' event
button.addEventListener('click', function() {
    // Pick a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the body's background color
    document.body.style.backgroundColor = randomColor;
});