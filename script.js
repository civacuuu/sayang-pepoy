let spawnInterval;

// tombol play musik + mulai hujan teks
document.getElementById('playBtn').addEventListener('click', () => {
  const audio = document.getElementById('audio');
  audio.play();

  document.getElementById('playBtn').style.display = 'none'; // tombol hilang

  // mulai hujan teks setelah musik diputar
  spawnInterval = setInterval(spawnText, 600);
});

// fungsi hujan teks
function spawnText(){
  const text = document.createElement('div');
  text.className = 'falling';
  text.textContent = 'I love you gantengkuuu❤️';

  document.body.appendChild(text);

  const textWidth = text.offsetWidth;
  const screenWidth = window.innerWidth;

  const maxLeft = screenWidth - textWidth;
  const leftPos = Math.random() * maxLeft;

  text.style.left = leftPos + 'px';
  text.style.animationDuration = (5 + Math.random()*4) + 's';

  setTimeout(() => text.remove(), 10000);
}