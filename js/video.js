document.addEventListener("DOMContentLoaded", function () {
    var video = videojs("my-video");
    video.responsive(true);
    var playPauseButton = document.querySelector("#play-button");
    var isPlaying = false;

    playPauseButton.addEventListener("click", function () {
        if (!isPlaying) {
            video.play();
            playPauseButton.innerHTML = "<i class='bx bx-pause' ></i>";
        } else {
            video.pause();
            playPauseButton.innerHTML = "<i class='bx bx-play' ></i>";
        }
        isPlaying = !isPlaying;
    });

    video.on("mouseleave", function (event) {
        if (!playPauseButton.contains(event.toElement)) {
            playPauseButton.style.opacity = 0;
        }
    });

    video.on("mouseenter", function () {
        playPauseButton.style.opacity = 1;
    });

    video.on("click", function (event) {
        if (event.clientX >= video.el().getBoundingClientRect().left && event.clientX <= video.el().getBoundingClientRect().right &&
            event.clientY >= video.el().getBoundingClientRect().top && event.clientY <= video.el().getBoundingClientRect().bottom) {
            event.preventDefault();
        }
    });


});