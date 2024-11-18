// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = `
            <nav>
                <label for="sidebar-active" class="open-sidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </label>
                <input type="checkbox" id="sidebar-active"/>
                <label for="sidebar-active" id="overlay"></label>
                <div class="links-container">
                    <label for="sidebar-active" class="close-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </label>
                    <a href="../index.html" id="home-link" class="home-link">
                        <img src="../assets/logo.jpg" alt="logo" width="60px" height="60px">
                    </a>
                    <a href="../projects/index.html">Projects</a>
                    <a href="../about/about.html">About</a>
                    <a href="../blogs/blogs.html">Blogs</a>
                    <a href="../login/getstarted.html">Get Started</a>
                </div>
            </nav>
            <a href="../index.html" id="logo">
                <img src="../assets/logo.jpg" alt="logo" width="50px" height="50px">
            </a>
        `;
    }
});