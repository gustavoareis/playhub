// Seleciona os elementos do DOM
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeControl = document.getElementById("volume");


// --- FUNÇÕES ---

// Função para formatar o tempo em minutos e segundos (mm:ss)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

// CORRIGIDO: Agora atualiza uma variável CSS em vez do background diretamente
function updateProgressColor() {
  const percentage = (progress.value / progress.max) * 100 || 0;
  progress.style.setProperty('--progress-percentage', `${percentage}%`);
}

// CORRIGIDO: Agora atualiza uma variável CSS em vez do background diretamente
function updateVolumeColor() {
  const percentage = (volumeControl.value / volumeControl.max) * 100;
  volumeControl.style.setProperty('--volume-percentage', `${percentage}%`);
}


// --- EVENT LISTENERS (Ouvintes de Eventos) ---

// Quando os metadados da música são carregados
audio.addEventListener("loadedmetadata", () => {
  progress.max = audio.duration;
  durationEl.textContent = formatTime(audio.duration);
  updateProgressColor();
});

// Conforme a música toca, atualiza a barra e o tempo atual
audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  updateProgressColor();
});

// Ação de clique no botão de Play/Pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.add("pause");
  } else {
    audio.pause();
    playPauseBtn.classList.remove("pause");
  }
});

// Permite que o usuário arraste a barra de progresso para mudar o tempo da música
progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
  updateProgressColor();
});

// Permite que o usuário altere o volume
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
  updateVolumeColor();
});


// --- EXECUÇÃO INICIAL ---

// Garante que as barras tenham a cor correta ao carregar a página
updateProgressColor();
updateVolumeColor();