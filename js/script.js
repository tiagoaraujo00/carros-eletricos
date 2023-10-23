let video = document.getElementById("meu-video");

function verificaPosicao() {
  let videoPosicao = video.getBoundingClientRect();

  if (videoPosicao.top < window.innerHeight && videoPosicao.bottom >= 0) {
    video.play();
    window.removeEventListener("scroll", verificaPosicao);
  }
}

video.addEventListener("ended", function () {
  video.currentTime = 0;
  video.play();
});

window.addEventListener("scroll", verificaPosicao);

// Animação da página
const elementos = document.querySelectorAll(".animacao");

window.addEventListener("scroll", () => {
  elementos.forEach((elemento) => {
    const rect = elemento.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      elemento.classList.add("animated");
    } else {
      elemento.classList.remove("animated");
    }
  });
});

// menu hamburguer
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menuToggle2 = document.getElementById("menuToggle2");
  const navList = document.querySelector(".nav_list");

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    menuToggle2.classList.toggle("active");
    navList.classList.toggle("active");
  });

  menuToggle2.addEventListener("click", () => {
    navList.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuToggle2.classList.toggle("active");
  });
});
