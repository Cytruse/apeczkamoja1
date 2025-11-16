// -------------------------
// ROUTER (TWÓJ KOD — ZOSTAWIAM)
// -------------------------
var params = new URLSearchParams(window.location.search);
var ROUTES = {
    home: 'home.html',
    services: 'services.html',
    qr: 'qr.html',
    more: 'more.html',
    moreid: 'moreid.html',
    id: 'id.html',
    shortcuts: 'shortcuts.html',
    pesel: 'pesel.html',
    scanqr: 'scanqr.html',
    showqr: 'showqr.html',
    gen: 'gen.html',
    card: 'card.html',
};

function sendTo(key){
    var qs = params.toString();
    var file = ROUTES[String(key)] || (String(key).endsWith('.html') ? String(key) : String(key) + '.html');
    var href = file + (qs ? `?${qs}` : '');
    location.href = href;
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
});


// -------------------------
//  SYSTEM OPERACYJNY (TWÓJ KOD — ZOSTAWIAM)
// -------------------------
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) return 1;
    if (/android/i.test(userAgent)) return 2;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 3;
    return 4;
}

if (getMobileOperatingSystem() == 2){
    document.querySelector(".bottom_bar").style.height = "70px";
}


// -------------------------
//  🔥 MOCNY TOP BAR BLUR — JAK W MOBYWATEL
// -------------------------

function initTopBarEffects() {
    const bar =
        document.querySelector(".top_grid") ||
        document.querySelector(".top_slide_bar");

    if (!bar) return;

    // Ustawienia globalne paska
    bar.style.position = "fixed";
    bar.style.top = "env(safe-area-inset-top)";
    bar.style.left = "0";
    bar.style.right = "0";
    bar.style.zIndex = "9999";
    bar.style.padding = "8px 0";

    // Mocny efekt szkła
    bar.style.background = "rgba(0,0,0,0.25)";
    bar.style.backdropFilter = "blur(35px)";
    bar.style.webkitBackdropFilter = "blur(35px)";
    bar.style.transform = "translateZ(0)";

    bar.style.transition =
        "background 0.25s ease, backdrop-filter 0.25s ease";

    // Reakcja na scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            bar.style.background = "rgba(0,0,0,0.55)";
            bar.style.backdropFilter = "blur(45px)";
            bar.style.webkitBackdropFilter = "blur(45px)";
        } else {
            bar.style.background = "rgba(0,0,0,0.25)";
            bar.style.backdropFilter = "blur(35px)";
            bar.style.webkitBackdropFilter = "blur(35px)";
        }
    });
}

document.addEventListener("DOMContentLoaded", initTopBarEffects);
