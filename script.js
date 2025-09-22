// --- Flores cayendo ---
const flowerContainer = document.querySelector('.flower-container');

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  const flowers = ["🌻","🌼","💛","✨"];
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.top = "-50px"; // inicio fuera de pantalla
  flower.style.animationDuration = (3 + Math.random() * 5) + "s";

  flowerContainer.appendChild(flower);

  // Elimina la flor al terminar la animación
  flower.addEventListener("animationend", () => flower.remove());
}

setInterval(createFlower, 400);

// --- Botones y música ---
const btn = document.getElementById("surpriseBtn");
const hiddenMsg = document.getElementById("hiddenMessage");
const music = document.getElementById("bgMusic");
const confessBtn = document.getElementById("confessBtn");
const confession = document.getElementById("confession");

btn.addEventListener("click", () => {
  hiddenMsg.classList.remove("hidden");
  confessBtn.classList.remove("hidden");

  // Música con fade-in
  music.volume = 0;
  music.play().then(() => {
    let targetVol = 0.5;
    let step = 0.01;
    const fadeIn = setInterval(() => {
      if(music.volume < targetVol){
        music.volume = Math.min(music.volume + step, targetVol);
      } else {
        clearInterval(fadeIn);
      }
    }, 50);
  }).catch(err => console.log('Autoplay bloqueado, requiere interacción'));
});

confessBtn.addEventListener("click", () => {
  confession.classList.remove("hidden");
});
