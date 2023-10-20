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
