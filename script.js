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
        document.documentElement.style.setProperty('--background-color', 'rgba(32, 41, 22, 1)'); // Dark Jungle Green
        document.documentElement.style.setProperty('--text-color', 'rgba(232, 240, 194, 1)'); // Jungle Mist
        document.documentElement.style.setProperty('--h1-color', 'rgba(140, 165, 50, 1)'); // Jungle Green
        document.documentElement.style.setProperty('--nav-background-color', 'rgba(32, 41, 22, 0.8)'); // Dark Jungle Green with some transparency
        document.documentElement.style.setProperty('--nav-text-color', 'rgba(181, 211, 87, 1)'); // Light Jungle Green
        document.documentElement.style.setProperty('--nav-hover-background-color', 'rgba(140, 165, 50, 1)'); // Jungle Green
        document.documentElement.style.setProperty('--nav-hover-text-color', 'rgba(232, 240, 194, 1)'); // Jungle Mist
    } else {
        document.documentElement.style.setProperty('--background-color', 'rgba(232, 240, 194, 1)'); // Jungle Mist
        document.documentElement.style.setProperty('--text-color', 'rgba(50, 77, 24, 1)'); // Deep Jungle Green
        document.documentElement.style.setProperty('--h1-color', 'rgba(140, 165, 50, 1)'); // Jungle Green
        document.documentElement.style.setProperty('--nav-background-color', 'rgba(181, 211, 87, 0.5)'); // Light Jungle Green with some transparency
        document.documentElement.style.setProperty('--nav-text-color', 'rgba(50, 77, 24, 1)'); // Deep Jungle Green
        document.documentElement.style.setProperty('--nav-hover-background-color', 'rgba(140, 165, 50, 1)'); // Jungle Green
        document.documentElement.style.setProperty('--nav-hover-text-color', 'rgba(232, 240, 194, 1)'); // Jungle Mist
    }
}



switchPage('home');


window.onscroll = function() {
    var bodyHeight = document.body.scrollHeight - innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var percent = scrollTop / bodyHeight * 100;
    document.getElementById('progress-bar').style.width = percent + '%';
}

