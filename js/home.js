// HOME PAGE CONTROLS
var logoC = document.getElementById("logo-C");
var cClick = document.getElementsByClassName("contact-click");
var contact = document.getElementById("contact");


var logoP = document.getElementById("logo-P");
var pClick = document.getElementsByClassName("portfolio-click");
var portfolioIe = document.getElementById("portfolio-ie");
var portfolioBr = document.getElementById("portfolio-br");
var portfolioR = document.getElementById("portfolio-r");

var cutout = document.getElementById("cutout");

var smMenu = document.getElementById("sm-menu");
var smSvg = document.getElementById("sm-svg");

window.onload = () => {
        loadLogo();
        footer();
};

function loadLogo() {
    logoP.classList.remove("lp-off");
    logoP.classList.add("lp-on");
    logoC.classList.remove("lc-off");
    logoC.classList.add("lc-on");
    return;
};

// MOBILE ASPECT RATIO RESIZE 
window.onresize = () => {
    docW = window.innerWidth;
    docH = window.innerHeight;
    smSvg.style.transition = "none";
    smMenu.style.transition = "none";
    help.style.transition = "none";
    if (logoC) {
        logoC.style.transition = "none";
        logoP.style.transition = "none";
    }
    setTimeout(() => {
        if (logoC) {
            logoC.style.removeProperty("transition");
            logoP.style.removeProperty("transition");
        }
        smSvg.style.removeProperty("transition");
        smMenu.style.removeProperty("transition");
        help.style.removeProperty("transition");
    }, 0);
}
// LOGO CLICK
for (var i = 0; i < pClick.length; i++) {
    pClick[i].onclick = () => {
        clickedLogoOff();
        setTimeout(() => {
            window.location.href = "/portfolio";
        }, 1500);
    }
};
cutout.onclick = () => {
    clickedLogoOff();
    setTimeout(() => {
        window.location.href = "/about";
    }, 1500);
};
for (var i = 0; i < cClick.length; i++) {
    cClick[i].onclick = () => {
        clickedLogoOff();
        setTimeout(() => {
            window.location.href = "/contact";
        }, 1500);
    }
};

function clickedLogoOff() {
    logoP.classList.add("lp-off");
    logoC.classList.add("lc-off");
    logoP.classList.remove("lp-on");
    logoC.classList.remove("lc-on");
    return;
};