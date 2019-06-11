const audio = document.createElement('audio');
audio.src = '../media/lightning-strike-sound-effect.mp3';
audio.type='audio/mpeg';

function thunder() {
  audio.pause();
  audio.load();
  audio.currentTime = 0;
  audio.play();
}

const thunderButton = document.getElementById('thunderbutton');

thunderButton.onclick = () => thunder();