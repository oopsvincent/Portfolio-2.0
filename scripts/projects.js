function loadProject(projectPath) {
    document.getElementById('project-frame').src = projectPath + "/index.html";
}

document.addEventListener("DOMContentLoaded", () => loadProject('../about'));