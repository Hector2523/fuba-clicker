function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var quantidade = getCookie("quantidade");
if (quantidade === "") {
    quantidade = 0;
}

function adicionarFuba() {
    quantidade++;
    document.getElementById("out").innerHTML = quantidade;
    document.getElementById("img").style.animation = "scale 1s forwards";
    function stopAnimation() {
        document.getElementById("img").style.animation = "";
    }
    setTimeout(stopAnimation, 1000);
    setCookie("quantidade", quantidade, 30);
}

window.addEventListener('load', function() {
    var quantidade = getCookie("quantidade");
    if (quantidade === "") {
        quantidade = 0;
    }
    document.getElementById("out").innerHTML = quantidade;
});
