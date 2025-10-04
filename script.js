const buttonsDiv = document.getElementById("buttons");
let currentAudio = null;

// Play sound when a sound button is clicked
buttonsDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const soundFile = e.target.getAttribute("data-sound");

    // Stop previous audio if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new audio
    currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play().catch(err => console.error("Audio play failed:", err));
  }

  // Stop button functionality
  if (e.target.classList.contains("stop")) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
  }
});
