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
