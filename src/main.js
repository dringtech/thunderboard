const audio = new Audio('../media/lightning-strike-sound-effect.mp3');

function thunder() {
  audio.pause();
  audio.fastSeek(0);
  audio.play();
}

const thunderButton = document.getElementById('thunderbutton');

thunderButton.onclick = () => thunder();