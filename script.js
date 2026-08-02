/* ==========================================================
PAULIN BASALCES
SCRIPT.JS
========================================================== */

"use strict";

/* ==========================================================
ELEMENTOS
========================================================== */

const body = document.body;

const header = document.querySelector(".site-header");

const menuButton = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-nav");

const menuLinks = document.querySelectorAll(".mobile-nav a");
/* ==========================================================
MENU MOBILE
========================================================== */

if(menuButton){

    menuButton.addEventListener("click",()=>{

        mobileMenu.classList.toggle("active");

        const expanded =
            menuButton.getAttribute("aria-expanded")==="true";

        menuButton.setAttribute(
            "aria-expanded",
            !expanded
        );

    });

}
menuLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            false
        );

    });

});

/* ==========================================================
HEADER
========================================================== */

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.style.background=
            "rgba(15,7,24,.95)";

        header.style.borderBottom=
            "1px solid rgba(255,255,255,.08)";

    }

    else{

        header.style.background=
            "rgba(15,7,24,.78)";

        header.style.borderBottom=
            "1px solid rgba(255,255,255,.04)";

    }

});
/* ==========================================================
SCROLL SUAVE
========================================================== */

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});
/* ==========================================================
PHOTO EFFECT
========================================================== */

const photo = document.querySelector(".photo-wrapper");

if(photo){

photo.addEventListener("mousemove",(e)=>{

const rect = photo.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

photo.style.transform =

`rotateY(${(x-rect.width/2)/35}deg)

 rotateX(${-(y-rect.height/2)/35}deg)`;

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="";

});

}
/* ==========================================================
SCROLL REVEAL
========================================================== */

const animatedElements = document.querySelectorAll(

".section-header,\
.hero-content,\
.highlight-card,\
.service-card,\
.about-content,\
.about-panel,\
.metrics-grid article,\
.statement,\
.book-cover,\
.book-content,\
.authority-grid article,\
.project-card,\
.impact-box,\
.faq-item,\
.cta-box"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

revealObserver.unobserve(entry.target);

}

});

},

{

threshold:.15

}

);

animatedElements.forEach(element=>{

revealObserver.observe(element);

});
/* ==========================================================
COUNTERS
========================================================== */

const counters = document.querySelectorAll(

".metrics-grid strong"

);

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting){

return;

}

const counter = entry.target;

const text = counter.textContent.trim();

const value = parseInt(

text.replace(/\D/g,"")

);

if(isNaN(value)){

return;

}

let current = 0;

const increment = Math.max(

1,

Math.ceil(value/40)

);

const timer = setInterval(()=>{

current += increment;

if(current >= value){

current = value;

clearInterval(timer);

}

if(text.includes("+")){

counter.textContent = "+" + current;

}else{

counter.textContent = current;

}

},25);

counterObserver.unobserve(counter);

});

},

{

threshold:.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});
/* ==========================================================
CARDS
========================================================== */

const cards = document.querySelectorAll(

".service-card,.project-card,.highlight-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});
/* ==========================================================
RESIZE
========================================================== */

window.addEventListener("resize",()=>{

if(window.innerWidth>820){

mobileMenu.classList.remove("active");

menuButton.setAttribute(

"aria-expanded",

false

);

}

});

/* ==========================================================
ACTIVE MENU
========================================================== */

const sections = document.querySelectorAll("section[id]");

const desktopItems = document.querySelectorAll(

".desktop-nav a"

);

const mobileItems = document.querySelectorAll(

".mobile-nav a"

);

window.addEventListener("scroll",()=>{

let currentSection="";

sections.forEach(section=>{

const top = section.offsetTop-120;

const height = section.offsetHeight;

if(window.scrollY>=top){

currentSection=section.getAttribute("id");

}

});

desktopItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+currentSection){

link.classList.add("active");

}

});

mobileItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+currentSection){

link.classList.add("active");

}

});

});
/* ==========================================================
BACK TO TOP
========================================================== */

const backToTop = document.createElement("button");

backToTop.className="back-to-top";

backToTop.setAttribute(

"aria-label",

"Voltar ao topo"

);

backToTop.innerHTML="↑";

document.body.appendChild(backToTop);

window.addEventListener("scroll",()=>{

if(window.scrollY>700){

backToTop.classList.add("visible");

}else{

backToTop.classList.remove("visible");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/* ==========================================================
REDUCED MOTION
========================================================== */

const reducedMotion = window.matchMedia(

"(prefers-reduced-motion: reduce)"

);

if(reducedMotion.matches){

document.documentElement.style.scrollBehavior="auto";

}
/* ==========================================================
PRELOAD IMAGES
========================================================== */

window.addEventListener("load",()=>{

document.querySelectorAll("img")

.forEach(image=>{

if(image.complete){

image.classList.add("loaded");

}

});

});
/* ==========================================================
ERROR HANDLING
========================================================== */

window.addEventListener("error",(event)=>{

console.warn(

"Erro capturado:",

event.message

);

});
/* ==========================================================
INITIALIZATION
========================================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

console.log(

"Paulin Basalces website initialized."

);

});
/* ==========================================================
END OF FILE
========================================================== */

