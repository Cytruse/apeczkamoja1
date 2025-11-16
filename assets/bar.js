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
//  🔥 TOP BAR BLUR JAK W MOBYWATEL
// -------------------------

function initTopBarEffects() {
    const bar =
        document.querySelector(".top_grid") ||
        document.querySelector(".top_slide_bar");

    if (!bar) return;

    const TOP_OFFSET = 10; // od ilu px scrolla ma się pojawić pasek
    const BODY_PADDING_CLASS = "body-with-top-bar";

    // stan początkowy
    bar.classList.add("top-bar--hidden");

    function updateTopBar() {
        if (window.scrollY > TOP_OFFSET) {
            bar.classList.remove("top-bar--hidden");
            bar.classList.add("top-bar--active");
            document.body.classList.add(BODY_PADDING_CLASS);
        } else {
            bar.classList.add("top-bar--hidden");
            bar.classList.remove("top-bar--active");
            document.body.classList.remove(BODY_PADDING_CLASS);
        }
    }

    window.addEventListener("scroll", updateTopBar, { passive: true });
    updateTopBar(); // wywołanie na starcie
}

document.addEventListener("DOMContentLoaded", initTopBarEffects);

