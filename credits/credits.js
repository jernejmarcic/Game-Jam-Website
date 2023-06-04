var glitch = document.getElementById("glitch");
setInterval(function() {
    glitch.innerHTML = glitch.textContent.split('').map(function(c) {
        var fluctuation = Math.floor(Math.random() * 2) * (Math.random() > .5 ? 1 : -1);
        return '<span style="position:relative;top:' + fluctuation + 'px;">' + c + '</span>';
    }).join('');
}, 200);