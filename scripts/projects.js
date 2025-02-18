function loadProject(projectPath) {
    document.getElementById('project-frame').src = projectPath + "/index.html";
    // document.getElementById('fullPage').href = projectPath;
}

document.addEventListener("DOMContentLoaded", () => loadProject('../about'));

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    // navbar.style.transform = 'translateX(0px)';
});


if (window.innerWidth <= 768) {
    navbar.addEventListener("click", () => {
        navbar.classList.toggle("active");
    })
}

const iframe = document.getElementById('project-frame');
const button = document.getElementById('fullscreen-button');

button.addEventListener('click', () => {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) {
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }
});