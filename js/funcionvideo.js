function playVideo() {
    var video = document.getElementById("myVideo");
    var button = document.querySelector(".play-button");
    button.style.display = "none"; // Esconde el botón de reproducción
    video.style.display = "block"; // Muestra el video
    video.play(); // Reproduce el video
}
