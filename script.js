const sounds = ["clap", "hi-hat", "kick", "openhat", "snare", "tink"];

const buttonsDiv = document.getElementById("buttons");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
  });

  buttonsDiv.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";
stopBtn.addEventListener("click", stopSounds);
buttonsDiv.appendChild(stopBtn);

// Stop all sounds
function stopSounds() {
  const audios = document.querySelectorAll("audio");
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
