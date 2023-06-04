let isCorrectContainerClicked = false;
    function hello(){
        alert('This crewmate is innocent');
        alert('Dont just kill random people');
        alert('Because without the crew');
        alert('you might not live to see the end');
        alert('But in the end');
        alert('Linkin Park');
    }
    function showTextPopup() {
      if (isCorrectContainerClicked) {
        alert('Innocent');
        return;
      }

      const popup = document.getElementById('text-popup');
      popup.textContent = "You killed the imposter. He had a note in his pocket. It reads: TXPE4";
      popup.style.display = 'block';

      // Disable other functions
      isCorrectContainerClicked = false;
      document.querySelector('.container').style.pointerEvents = 'none';
    }

    document.querySelector('.click-area-container').addEventListener('click', function() {
      isCorrectContainerClicked = true;
    })