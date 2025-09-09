function spawnText(){
  const text = document.createElement('div');
  text.className = 'falling';
  text.textContent = 'I love you gantengkuuu❤️';
  text.style.left = Math.random() * 100 + 'vw';
  text.style.animationDuration = (5 + Math.random()*4) + 's';
  document.body.appendChild(text);
  setTimeout(() => text.remove(), 10000);
}

setInterval(spawnText, 600);