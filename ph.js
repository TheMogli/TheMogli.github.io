// ph.js

window.addEventListener("DOMContentLoaded", function() {
    var dynamicTextElement = document.getElementById("dynamicText");
    
    // Update dynamic text
    dynamicTextElement.textContent = "PLACEHOLDER";
  });
  
  function handleImageClick() {
    alert("Image clicked!");
  }
  
  function checkInputs() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    
    // Check if all inputs are correct
    if (input1 === "LVK54" && input2 === "BA4TA" && input3 === "TXPE4") {
      alert("Correct! But where to use this?");
    } else {
      alert("Some inputs are incorrect. Please try again.");
    }
  }
  