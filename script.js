let darkMode = false;

function switchPage(pageId) {
    const pages = document.getElementsByClassName('page');
    for (let page of pages) {
        if(page.classList.contains('show')){
            page.classList.remove('show');
            page.classList.add('hide');
        }
    }
    setTimeout(function(){
        for (let page of pages) {
            page.classList.remove('show');
            page.classList.remove('hide');
        }
        document.getElementById(pageId).classList.add('show');
    }, 500);
}

function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
        // Dark Mode
        document.documentElement.style.setProperty('--background-color', 'rgba(26, 36, 33, 1)'); // Dark Jungle Green
        document.documentElement.style.setProperty('--text-color', 'rgba(161, 202, 180, 1)'); // Light Jungle Green
        document.documentElement.style.setProperty('--h1-color', 'rgba(161, 202, 180, 1)'); // Light Jungle Green
        document.documentElement.style.setProperty('--nav-background-color', 'rgba(26, 36, 33, 0.5)'); // Semi-transparent Dark Jungle Green
        document.documentElement.style.setProperty('--nav-text-color', 'rgba(161, 202, 180, 1)'); // Light Jungle Green
        document.documentElement.style.setProperty('--nav-hover-background-color', 'rgba(15, 20, 20, 1)'); // Darker Jungle Green
        document.documentElement.style.setProperty('--nav-hover-text-color', 'rgba(255, 255, 255, 1)'); // White
    } else {
        // Light Mode
        document.documentElement.style.setProperty('--background-color', 'rgba(161, 202, 180, 1)'); // Light Jungle Green
        document.documentElement.style.setProperty('--text-color', 'rgba(26, 36, 33, 1)'); // Dark Jungle Green
        document.documentElement.style.setProperty('--h1-color', 'rgba(26, 36, 33, 1)'); // Dark Jungle Green
        document.documentElement.style.setProperty('--nav-background-color', 'rgba(161, 202, 180, 0.5)'); // Semi-transparent Light Jungle Green
        document.documentElement.style.setProperty('--nav-text-color', 'rgba(26, 36, 33, 1)'); // Dark Jungle Green
        document.documentElement.style.setProperty('--nav-hover-background-color', 'rgba(89, 113, 106, 1)'); // Darker Jungle Green
        document.documentElement.style.setProperty('--nav-hover-text-color', 'rgba(0, 0, 0, 1)'); // Black
    }
}


switchPage('home');


window.onscroll = function() {
    var bodyHeight = document.body.scrollHeight - innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var percent = scrollTop / bodyHeight * 100;
    document.getElementById('progress-bar').style.width = percent + '%';
}
