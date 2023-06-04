let darkMode = false;

function switchPage(pageId) {
    const pages = document.getElementsByClassName('page');
    for (let page of pages) {
        if (page.classList.contains('show')) {
            page.classList.remove('show');
        }
    }
    setTimeout(function() {
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

function startCountdown() {
    var countDownDate = new Date("Jun 20, 2023 23:59:59").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerText = "EXPIRED";
        }
    }, 1000);
}

startCountdown();



let timer;

document.onmousemove = resetTimer;
document.onkeypress = resetTimer;

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(redirectToAnotherPage, 30000);  // 30 seconds of inactivity
}

function redirectToAnotherPage() {
    window.location.href = 'credits/credits.html';
}

