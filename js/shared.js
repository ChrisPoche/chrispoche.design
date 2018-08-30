// FULL SCREEN FOR OPTIMIZED VISUALS
function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
    else {
        cancelFullScreen.call(doc);
    }
}
var touchTime = 0;
var docW = window.innerWidth;
var docH = window.innerHeight;
var mobileDevice = (docH <= 414 && docW <= 823) || (docW <= 414 && docH <= 823);
if (mobileDevice) {
    window.onclick = () => {
        if (touchTime == 0) {
            touchTime = new Date().getTime();
        }
        else {
            if (new Date().getTime() - touchTime < 500 && ((docW <= 823 && docH <= 414) || (docH <= 823 && docW <= 414))) {
                toggleFullScreen();
            }
            else {
                touchTime = new Date().getTime();
            }
        }
    }
}

window.onresize = () => {
    document.getElementById("sm-menu").classList.remove("move");
    document.getElementById("sm-svg").classList.remove("move");
    navButtonOpen();
    setTimeout(() => {
        document.getElementById("sm-menu").classList.add("move");
        document.getElementById("sm-svg").classList.add("move");
    }, 0);
}
window.onorientationchange = () => {
    document.getElementById("sm-menu").classList.remove("move");
    document.getElementById("sm-svg").classList.remove("move");
    navButtonOpen();
    setTimeout(() => {
        document.getElementById("sm-menu").classList.add("move");
        document.getElementById("sm-svg").classList.add("move");
    }, 0);
}

window.onload = () => {
    footer();
}

// FOOTER EXPAND CONTROLS
function footer() {
    setTimeout(() => {
        document.getElementById("sm-svg").classList.remove("footer-off");
    }, 1000);
    return;
}

// NEW VERSION OF MENU HIDE
var navMenu = document.getElementById("sm-menu");
var navButton = document.getElementById("sm-svg");

navButton.onclick = () => {
    if(navMenu.classList.contains("sm-off")){
        navMenu.classList.remove("sm-off");
        navButton.classList.add("navButton-clicked"); 
        if(docH>=docW){
            navButtonOpen();
        }
    }
    else{
        navButton.classList.remove("navButton-clicked"); 
        navMenu.classList.add("sm-off");
        if(docH>=docW){
            navButtonOpen();
        }
    }
}

function navButtonOpen(){
    if(navButton.classList.contains("navButton-clicked")){
        navButton.classList.add("navButton-open");
    }
    else{
        navButton.classList.remove("navButton-open");
    }
    return;
}

// HELP BUTTON
var help = document.getElementById("help");
setTimeout(() => {
    help.classList.remove("hide-help");
}, 3000);
help.onclick = () => {
    var interstitialHelp = document.createElement("div")
    var interstitial = document.getElementById("interstitial");
    interstitialHelp.setAttribute("id", "inter-help");
    if (web) { // ON PROJECT PAGE
        var panelsText1 = document.createElement("h4");
        var panelsText2 = document.createElement("h4");
        panelsText1.setAttribute("class", "demo-text click-panels");
        panelsText2.setAttribute("class", "demo-text click-panels2");
        if (docH > docW) {
            panelsText1.style.width = "35vw";
            panelsText1.style.left = "57.5vw";
        }
        panelsText1.innerText = "Click on either panel to open the drawer to their projects.";
        var demoDesign = document.createElement("div");
        demoDesign.innerHTML = '<h1 id="title-design" class="title">Design</h1>';
        demoDesign.setAttribute("class", "demo-design");
        var demoDesignProj = document.createElement("div");
        demoDesignProj.innerHTML = '<div id="design-projects" style="background-color:#333;"><div class="Caire project project-thumb"></div><div class="Eddy project project-thumb"></div><div class="CAD project project-thumb"></div><div class="project project-thumb"></div></div>';
        demoDesignProj.setAttribute("class", "demo-web");
        var demoSmSvg = document.createElement("div");
        demoSmSvg.setAttribute("id", "sm-svg");
        demoSmSvg.classList.add("demo-sm");
        setTimeout(() => {
            interstitial.appendChild(interstitialHelp);
            interstitialHelp.style.opacity = "1";
            interstitial.appendChild(demoDesign);
            interstitial.appendChild(demoDesignProj);
            interstitial.appendChild(panelsText1);
            interstitial.appendChild(panelsText2);
            if (docH > docW) {
                interstitial.appendChild(demoSmSvg);
            }
        }, 0);
        setTimeout(() => {
            panelsText1.style.opacity = "1";
        }, 1000);
        setTimeout(() => {
            demoDesign.style.opacity = "1";
        }, 2000);
        setTimeout(() => {
            demoDesign.style.opacity = "0";
        }, 3000);
        setTimeout(() => {
            panelsText1.style.opacity = "0";
            demoDesignProj.style.opacity = "1";
        }, 3500);
        setTimeout(() => {
            panelsText2.innerText = "Then click any project thumbnail to expand it.";
            panelsText2.style.opacity = "1";
        }, 4500);
        setTimeout(() => {
            demoDesignProj.style.opacity = "0";
            panelsText2.style.opacity = "0";
        }, 6500);
        setTimeout(() => {
            tabHelpDemo();
        }, 7500);
        setTimeout(() => {
            demoDesign.remove();
            demoDesignProj.remove();
            panelsText1.remove();
            panelsText2.remove();
        }, 9500);
    }
    if (contactMe) { // ON CONTACT PAGE 
        var emailMe = document.createElement("h5");
        var emailText = document.createElement("h4");
        emailText.setAttribute("class", "demo-text click-email");
        emailText.innerText = "Tap here to send me an email";
        emailMe.innerText = "capoche1@gmail.com";
        emailMe.setAttribute("class", "email-contact");
        var callMe = document.createElement("h5");
        callMe.innerText = "502.758.3497";
        callMe.setAttribute("class", "phone-contact");
        setTimeout(() => {
            interstitial.appendChild(interstitialHelp);
            interstitialHelp.style.opacity = "1";
            interstitial.appendChild(emailText);
            interstitial.appendChild(emailMe);
            interstitial.appendChild(callMe);
        }, 0);
        setTimeout(() => {
            emailText.style.opacity = "1";
            emailMe.style.opacity = "1";
        }, 1000);
        setTimeout(() => {
            emailMe.style.opacity = "0";
            emailText.style.opacity = "0";
        }, 5000);
        setTimeout(() => {
            emailText.style.transition = "none";
            emailText.classList.add("click-phone");
            emailText.innerText = "Or click here to reach me by phone";
            emailText.style.transition = "all 1s";
            setTimeout(() => {
                callMe.style.opacity = "1";
                emailText.style.opacity = "1";
            }, 1000);
        }, 6000);
        setTimeout(() => {
            emailMe.remove();
        }, 7000);
        setTimeout(() => {
            callMe.style.opacity = "0";
            emailText.style.opacity = "0";
            tabHelpDemo();
        }, 10000);
        setTimeout(() => {
            callMe.remove();
            emailText.remove();
        }, 11000);
    }
    if (aboutMe) { // ON ABOUT ME PAGE
        var emailText = document.createElement("h4");
        emailText.setAttribute("class", "demo-text click-email email-text-about");
        emailText.innerText = "Tap here to send me an email";
        var inlineEmail = document.getElementById("email");
        var aboutMeText = document.getElementById("aboutMeText");
        var aboutMeHead = document.getElementById("about-me");
        aboutMeHead.style.transition = "all 1s";
        aboutMeText.style.transition = "all 1s";
        inlineEmail.style.transition = "all 1s";
        setTimeout(() => {
            interstitial.appendChild(emailText);
        }, 0);
        setTimeout(() => {
            emailText.style.opacity = "1";
            aboutMeHead.style.color = "gray";
            aboutMeText.style.color = "gray";
            inlineEmail.style.color = "white";
        }, 1000);
        setTimeout(() => {
            interstitial.style.transition = "all 1sec";
            interstitial.appendChild(interstitialHelp);
            interstitialHelp.style.opacity = "0";
            setTimeout(() => {
                interstitialHelp.style.opacity = "1";
                interstitialHelp.style.backgroundColor = "rgba(0,0,0,.88)";
                tabHelpDemo();
            }, 0);
        }, 5000);
        setTimeout(() => {
            emailText.style.opacity = "0";
            inlineEmail.style.color = "gray";
            aboutMeHead.style.color = "white";
            aboutMeText.style.color = "white";
            emailText.remove();
            aboutMeHead.style.removeProperty("transition");
            aboutMeText.style.removeProperty("transition");
            inlineEmail.style.removeProperty("transition");
        }, 7000);
    }
    if (logoC) { // ON HOME PAGE
        interstitial.appendChild(interstitialHelp);
        var highlightC = document.createElement("div");
        var clickCText = document.createElement("h4");
        var highlightP = document.createElement("div");
        var clickPText = document.createElement("h4");
        var clickCutText = document.createElement("h4");
        var fullscreenText = document.createElement("h4");
        clickCText.setAttribute("class", "demo-text click-c");
        clickPText.setAttribute("class", "demo-text click-p");
        clickCutText.setAttribute("class", "demo-text click-cut");
        fullscreenText.setAttribute("class", "demo-text click-fullscreen");
        highlightC.setAttribute("class", "demo-el lc-on");
        highlightP.setAttribute("class", "demo-el lp-on");
        clickCText.innerText = "Click the 'C' to get my Contact info";
        interstitial.appendChild(clickCText);
        highlightC.setAttribute("id", "logo-C");
        interstitial.appendChild(highlightC);
        clickPText.innerText = "Tap the 'P' to check out my Portfolio";
        interstitial.appendChild(clickPText);
        highlightP.setAttribute("id", "logo-P");
        interstitial.appendChild(highlightP);
        clickCutText.innerText = "Click on the Cutout, here, to learn a bit more About Me";
        interstitial.appendChild(clickCutText);
        fullscreenText.innerText = "For optimal mobile experience, double tap the screen on any page to go into full screen mode";
        interstitial.appendChild(fullscreenText);
        setTimeout(() => {
            interstitialHelp.style.opacity = "1";
        }, 0);
        setTimeout(() => {
            clickCText.style.opacity = "1";
            highlightC.style.opacity = "1";
        }, 1000);
        setTimeout(() => {
            clickCText.style.opacity = "0";
            highlightC.style.opacity = "0";
        }, 4500);
        setTimeout(() => {
            clickPText.style.opacity = "1";
            highlightP.style.opacity = "1";
        }, 5500);
        setTimeout(() => {
            clickCText.remove();
            highlightC.remove();
        }, 6500);
        setTimeout(() => {
            clickPText.style.opacity = "0";
            highlightP.style.opacity = "0";
        }, 9500);
        setTimeout(() => {
            clickCutText.style.opacity = "1";
        }, 10500);
        setTimeout(() => {
            clickPText.remove();
            highlightP.remove();
        }, 11000);
        setTimeout(() => {
            clickCutText.style.opacity = "0";
            tabHelpDemo();
        }, 14500);
        setTimeout(() => {
            clickCutText.remove();
        }, 15500);
    }
    function tabHelpDemo() {
        var interstitial = document.getElementById("interstitial");
        var highlightTab = document.createElement("div");
        var clickTabText = document.createElement("h4");
        var highlightHelp = document.createElement("div");
        var clickHelpText = document.createElement("h4");
        clickTabText.setAttribute("class", "demo-text click-tab");
        clickHelpText.setAttribute("class", "demo-text click-help");
        highlightTab.setAttribute("class", "demo-el");
        highlightHelp.setAttribute("class", "demo-el");
        clickTabText.innerText = "For quick navigation, tap this tab for the site map";
        interstitial.appendChild(clickTabText);
        highlightTab.setAttribute("id", "sm-svg");
        highlightTab.style.opacity = "0";
        interstitial.appendChild(highlightTab);
        if (contactMe || web) {
            clickTabText.classList.add("tab-contact-text");
            if (web) {
                clickTabText.style.left = "4vw";
            }
        }
        setTimeout(() => {
            if (demoSmSvg) {
                demoSmSvg.classList.remove("demo-sm");
            }
            clickTabText.style.opacity = "1";
            highlightTab.style.opacity = "1";
        }, 1000);
        setTimeout(() => {
            clickTabText.style.opacity = "0";
            highlightTab.style.opacity = "0";
            if (!logoC) {
                interstitial.style.opacity = "0";
                help.style.opacity = "0";
            }
        }, 5000);
        setTimeout(() => {
            clickTabText.remove();
            highlightTab.remove();
            if (!logoC) {
                interstitial.remove();
                help.remove();
            }
        }, 7000);
        if (logoC) {
            clickHelpText.innerText = "The help button will provide instructions on how to interact with each page";
            interstitial.appendChild(clickHelpText);
            highlightHelp.setAttribute("id", "help");
            interstitial.appendChild(highlightHelp);
            setTimeout(() => {
                clickHelpText.style.opacity = "1";
                highlightHelp.style.opacity = "1";
            }, 6000);
            setTimeout(() => {
                clickHelpText.style.opacity = "0";
                highlightHelp.style.opacity = "0";
                if (!mobileDevice) {
                    interstitial.style.opacity = "0";
                    help.style.opacity = "0";
                }
            }, 11000);
            setTimeout(() => {
                clickHelpText.remove();
                highlightHelp.remove();
                if (mobileDevice) {
                    setTimeout(() => {
                        fullscreenText.style.opacity = "1";
                    }, 0);
                    setTimeout(() => {
                        fullscreenText.style.opacity = "0";
                        interstitial.style.opacity = "0";
                        help.style.opacity = "0";
                    }, 6000);
                    setTimeout(() => {
                        fullscreenText.remove();
                        interstitial.remove();
                        help.remove();
                    }, 8000);
                }
                else {
                    interstitial.remove();
                    help.remove();
                }
            }, 13000);
        }
        return;
    };
}


// PORTFOLIO PAGE CONTROLS
var split = document.getElementsByClassName("split");
var container = document.getElementById("container");
var web = document.getElementById("web");
var design = document.getElementById("design");
var designProj = document.getElementById("design-projects");
var designProjContain = document.getElementById("design-proj-container");
var webProj = document.getElementById("web-projects");
var webProjContain = document.getElementById("web-proj-container");
var projPanel = document.getElementById("projects");

if (web) {
    window.onload = () => {
        var waitToClick = document.createElement("div");
        waitToClick.setAttribute("style", "width:100vw; height:100vh; opacity:0; position: fixed; left:0; top:0;");
        waitToClick.setAttribute("id", "wtc");
        container.appendChild(waitToClick);
        footer();
        web.classList.add("transition-two");
        design.classList.add("transition-two");
        slideIn();
    };
    function slideIn() {
        web.classList.remove("web-off");
        design.classList.remove("design-off");
        design.addEventListener("transitionend", openingPageAnimation);
        setTimeout(() => {
            web.classList.remove("web-edge-shade");
            design.classList.remove("design-edge-shade");
        }, 1000);
        return;
    };

    function openingPageAnimation() {
        web.classList.remove("transition-two");
        design.classList.remove("transition-two");
        design.classList.remove("drop");
        var waitToClick = document.getElementById("wtc");
        if (waitToClick != null) {
            setTimeout(() => {
                waitToClick.remove();
            }, 500);
        }
        return;
    };
};


// PORTFOLIO PAGE RESIZE
if (web) {
    window.onresize = () => {
        var smSvg = document.getElementById("sm-svg");
        smSvg.style.transition = "none";
        var help = document.getElementById("help");
        help.style.transition = "none";
    }
}
for (var i = 0; i < split.length; i++) {
    split[i].onclick = function () {
        console.log(`YOU'VE CLICKED ${this.id}`);
        if (this.classList.contains("clicked")) {     // Actions for clicking on a previously clicked-on panel 
            softOpen.apply(this);
        }
        else { // INITIAL CLICK PT DEUX
            console.log("PROJECTS",projects);
            if (this == design) { // INITIAL CLICK ON DESIGN - HIDES WEB PROJECTS
                projPanel.classList.add("panel-right"); // Sets it behind Design Panel
                var webProjThumb = document.getElementsByClassName("web-proj");
                for (var i = 0; i < webProjThumb.length; i++) {
                    webProjThumb[i].classList.add("hide");
                }
            }
            else { // INITIAL CLICK ON WEB - HIDES DESIGN PROJECTS
                projPanel.classList.add("panel-left"); // Sets it behind Web Panel
                var designProjThumb = document.getElementsByClassName("design-proj");
                for (var i = 0; i < designProjThumb.length; i++) {
                    designProjThumb[i].classList.add("hide");
                }
            }
            this.classList.add("clicked");
            projPanel.classList.remove("hide");
            projPanel.classList.add(`${this.id}-projects`);
            setTimeout(() => {
                softOpen.apply(this);
            }, 0);

            // ALLOWS PROJECT THUMBNAILS TO BE CLICKED
            var projects = document.getElementsByClassName("project");
            for (var i = 0; i < projects.length; i++){
                if(projects[i].classList.contains(`${this.id}-proj`)){
                    projects[i].onclick = (clicked) => {
                        clickedProj = clicked.target.id;
                        if(help){
                            help.style.opacity = "0";
                            help.addEventListener("transitionend", () =>{
                                help.classList.add("drop");
                            })
                        }
                        var content = document.createElement('div');
                        content.setAttribute("id","project-content");
                        content.setAttribute("class","hide");
                        content.setAttribute("style","transition: all 2s; background-color: white; overflowY: auto; width: 100vw; height: 100vh;");
                        loadProj(clickedProj);
                        container.appendChild(content);
                        setTimeout(() => {
                            content.classList.remove("hide");
                        }, 0);
                    }
                }
            }
        }
    }
}
    function softOpen() {
        document.body.style.backgroundColor = "black";
        projPanel.classList.add("transition-two");
        if (this == design) {
            this.classList.add("design-panel");
            web.classList.add("drop");
            setTimeout(() => {
                if (projPanel.classList.contains("panel-left")) { // Open - Closing
                    projPanel.classList.remove("panel-left");
                }
                else {
                    projPanel.classList.add("panel-left");  // Closed - Opening
                }
            }, 0);
        }
        else {
            this.classList.add("web-panel");
            design.classList.add("drop");
            setTimeout(() => {
                if (projPanel.classList.contains("panel-right")) { // Open - Closing
                    projPanel.classList.add("panel-left");
                    projPanel.classList.remove("panel-right");
                }
                else {
                    projPanel.classList.add("panel-right");   // Closed - Opening
                    setTimeout(() => {
                        projPanel.classList.remove("panel-left");
                    }, 0);
                }
            }, 0);
        }
        console.log(projPanel);
        projPanel.addEventListener("transitionend", softClose);
        setTimeout(() => {
            if (design.classList.contains("design-panel") || web.classList.contains("web-panel")) {
                softClose();
            }
        }, 2100);
        return;
    }

    function softClose() {
        if ((!projPanel.classList.contains("panel-left") && this.classList.contains("design-projects")) || (projPanel.classList.contains("panel-left") && this.classList.contains("web-projects"))) {
            projPanel.classList.remove("transition-two");
        }
        if (design.classList.contains("clicked")) {
            var clicked = design;
        }
        else {
            var clicked = web;
        }
        clicked.classList.add("soft-close");
        clicked.classList.remove(`${clicked.id}-panel`);
        clicked.addEventListener("transitionend", function () {
            if (clicked.classList.contains("clicked") && !projPanel.classList.contains("transition-two")) {
                clicked.classList.remove("clicked");
                if (clicked == design) {
                    web.classList.remove("drop");
                    var webProjThumb = document.getElementsByClassName("web-proj")
                    for (var i = 0; i < webProjThumb.length; i++) {
                        webProjThumb[i].classList.remove("hide");
                    }
                }
                else {
                    design.classList.remove("drop");
                    var designProjThumb = document.getElementsByClassName("design-proj")
                    for (var i = 0; i < designProjThumb.length; i++) {
                        designProjThumb[i].classList.remove("hide");
                    }
                }
                projPanel.className = "hide";
                console.log(projPanel);
            }
            clicked.classList.remove("soft-close");
        })
        return;
    }

    function aspectRatioCheck() {
        for (var i = 0; i < projects.length; i++) {
            if (docW >= docH) {
                projects[i].classList.add("project-w")
                projects[i].classList.remove("project-h");
            }
            else {
                projects[i].classList.add("project-h")
                projects[i].classList.remove("project-w");
            }
        }
        return;
    }

    function closeProj() {
        var projFull = document.getElementById("proj-full");
        var projContent = document.getElementById("proj-content");

        projFull.classList.add("lock-web");
        if (projContent) {
            setTimeout(() => {
                projContent.style.transition = "all 2s";
                projContent.classList.remove("proj-right");
                design.style.transition = "all 2s";
                design.classList.remove("title-right");
            }, 0);
        }
        if (webProjContain.classList.contains("hidden")) {
            setTimeout(() => {
                webProj.classList.add("scroll");
                webProjContain.classList.remove("hidden");
            }, 2000);
        }
        else {
            setTimeout(() => {
                designProj.classList.add("scroll");
                designProjContain.classList.remove("hidden");
            }, 2000);
        }
        setTimeout(() => {
            projFull.remove();
            projContent.remove();
        }, 2000);
    };

    function loadProj(clickedProj) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log("Status",this.status);
            document.body.style.backgroundColor = "white";
            var content = document.getElementById("project-content");
            content.innerHTML = this.responseText;
            var contentImages = document.getElementById("content-images");
            contentImages.setAttribute("class","content-images");
            var contentText = document.getElementById("content-text");
            contentText.setAttribute("class","content-text");
            var contentClose = document.getElementById("content-close");
            contentClose.onclick = () => {
                content.remove();
            }
          }
        };
        console.log("Clicked Proj",clickedProj);
        xhttp.open("GET", `/project/${clickedProj}`, true);
        xhttp.send();
        return;
      }

      function fullScreen(){
          console.log("MAKE IT BIGGER!!!");
      }


    // Grab all the trigger elements on the page
    var triggers;
    function recollectAllTriggers() {
        triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
        return;
    }

    var contactMe = document.getElementById('contact-me');
    var aboutMe = document.getElementById('about-me');
    if (contactMe || aboutMe) {
        footer();
    }