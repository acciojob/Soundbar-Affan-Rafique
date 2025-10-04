//your JS code here. If required.
// Keep track of currently playing audio
let currentAudio = null;

// Get all buttons with class "btn"
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const soundFile = button.getAttribute("data-sound");
    
    // Stop previous audio if any
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new audio
    currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play();
  });
});

// Stop button functionality
const stopBtn = document.querySelector(".stop");
stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});
