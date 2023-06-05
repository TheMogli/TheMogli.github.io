var button = document.getElementById('button');
    var counter = 0;

    function moveButton() {
      var bodyWidth = document.body.offsetWidth;
      var bodyHeight = document.body.offsetHeight;
      var buttonWidth = button.offsetWidth;
      var buttonHeight = button.offsetHeight;
      var maxLeft = bodyWidth - buttonWidth;
      var maxTop = bodyHeight - buttonHeight;

      var newLeft = Math.floor(Math.random() * maxLeft);
      var newTop = Math.floor(Math.random() * maxTop);

      button.style.left = newLeft + 'px';
      button.style.top = newTop + 'px';

      counter++;

      if (counter === 50) {
        alert("🌶️ Listened to any good songs recently? 🌶️");
        counter = 0;
      }
    }

    button.addEventListener('click', moveButton);