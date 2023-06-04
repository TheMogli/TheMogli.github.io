
      document.addEventListener('DOMContentLoaded', function() {
          var jumbledText = document.querySelector('.coupon-MegaYman');
          var originalText = "TZAXIQDH";
          var jumbleInterval = setInterval(jumbleCharacters, 100);
          
          function jumbleCharacters() {
              var jumbledCharacters = originalText.split('').sort(function() {
                  return 0.5 - Math.random();
              }).join('');
              jumbledText.textContent = jumbledCharacters;
          }
          
          
      });
 