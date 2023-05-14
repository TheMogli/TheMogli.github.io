// hiddenText.js

// Create a new element
var hiddenText = document.createElement('div');

// Set the text content of the element
hiddenText.textContent = "PLACEHOLDER";

// Apply CSS styles to hide the text
hiddenText.style.color = 'darkgrey';

// Append the hidden text element to the container
var container = document.getElementById('hidden-container');
container.appendChild(hiddenText);