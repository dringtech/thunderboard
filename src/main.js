const audio = document.createElement('audio');
audio.type = 'audio/mpeg';

export function init(options) {
  const { path, id = 'thunderbutton' } = options;
  audio.src = path;
  
  function rumble() {
    audio.pause();
    audio.load();
    audio.currentTime = 0;
    audio.play();
  }
  
  const thunderButton = document.getElementById(id);
  
  thunderButton.onclick = () => {rumble()};  
}
