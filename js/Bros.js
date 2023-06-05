
    var popup = document.getElementById('popup');
    var popupTitle = document.getElementById('popup-title');
    var popupText = document.getElementById('popup-text');
    var text = "It's simple you just have to VQG"; // Change this text as needed

    setTimeout(function() {
      popupTitle.textContent = "Now go murder the real princess";
      popupText.textContent = text;
      popup.style.display = 'block';
    }, 5*60000); // 1 minute (60,000 milliseconds)
