// script.js
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const homeLink = document.getElementById('home');
    const lessonsLink = document.getElementById('lessons');
    const progressLink = document.getElementById('progress');
    const logoutLink = document.getElementById('logout');

    // Load initial content
    loadContent('home');

    // Navigation event listeners
    homeLink.addEventListener('click', () => loadContent('home'));
    lessonsLink.addEventListener('click', () => loadContent('lessons'));
    progressLink.addEventListener('click', () => loadContent('progress'));
    logoutLink.addEventListener('click', () => logout());

    function loadContent(page) {
        // Simulated content loading
        switch (page) {
            case 'home':
                content.innerHTML = '<h2>Welcome to Language Learning!</h2><p>This is the home page.</p>';
                break;
            case 'lessons':
                content.innerHTML = '<h2>Lessons</h2><p>Here you will find language learning lessons.</p>';
                break;
            case 'progress':
                content.innerHTML = '<h2>Progress</h2><p>Track your language learning progress here.</p>';
                break;
            default:
                break;
        }
    }

    function () {
        
        alert('You have been logged out.');
        
    }
});
