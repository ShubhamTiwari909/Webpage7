const header = document.getElementById("header");
const reviewCard = document.querySelectorAll(".reviews-card");
const navbar = document.getElementById("navbar");
const navbarIcons = document.getElementById("navbar-icons");
const navbarLinks = document.querySelectorAll(".navbar-link");
const sliderBtn = document.querySelector(".sliderBtn");
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburger-icon");
const logo = document.getElementById("logo");
const bodyElement = document.getElementById('body');


let counter = 0;


const closeNavbar = () => {
    navbar.style.display = "none"
    navbar.classList.remove("dropdown");
    navbarIcons.classList.remove("dropdown");
    navbarIcons.style.display = "none";
    hamburgerIcon.classList.remove("text-darkgrey");
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-x");
    header.classList.remove("header-full");
    logo.src = "https://dl.dropboxusercontent.com/s/wo8c597x590k852/logo.png?dl=0";
    bodyElement.style.overflowY = "auto";
    for (let i = 0; i < navbarIcons.childElementCount; i++) {
        navbarIcons.children[i].style.color = "white"
    }
}

const dropdownNavigation = () => {
    if (navbar.classList.contains("dropdown") && navbarIcons.classList.contains("dropdown")) {
        header.style.backgroundColor = "transparent";
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].style.color = "black";
            navbarLinks[i].style.fontSize = "20px";
            navbarLinks[i].style.fontWeight = "bold";
        }
        
        closeNavbar();
        scrolledNavigation()

    }
    else {
        navbar.classList.add("dropdown");
        navbar.style.display = "flex";
        navbar.style.marginTop = "60px";
        navbarIcons.classList.add("dropdown");
        navbarIcons.style.display = "flex";
        header.classList.add("header-full");
        header.style.backgroundColor = "white";
        hamburgerIcon.classList.add("text-darkgrey");
        hamburgerIcon.classList.add("fa-x");
        hamburgerIcon.classList.remove("fa-bars");
        logo.src = "https://dl.dropboxusercontent.com/s/nkjddg5x0g58iwg/logo-copy.png?dl=0";
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].style.color = "black";
            navbarLinks[i].style.fontSize = "20px";
            navbarLinks[i].style.fontWeight = "bold";
        }
        for (let i = 0; i < navbarIcons.childElementCount; i++) {
            navbarIcons.children[i].style.color = "black"
        }
        bodyElement.style.height = "100%";
        bodyElement.style.overflowY = "hidden";
    }

}



const prev = () => {

    if (counter <= 0) {
        counter = reviewCard.length - 1;
    }
    else {
        counter--;
    }
    for (let i = 0; i < reviewCard.length; i++) {
        if (counter === i) {
            reviewCard[i].style.backgroundColor = "white";
            reviewCard[i].style.transform = `translateX(-${counter * 100}%) scale(1.1)`;
        }
        else {
            reviewCard[i].style.backgroundColor = "rgb(245, 244, 244)";
            reviewCard[i].style.transform = `translateX(-${counter * 100}%) scale(0.9)`;
        }
    }
}
const next = () => {
    if (counter >= reviewCard.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    for (let i = 0; i < reviewCard.length; i++) {
        reviewCard[i].style.zIndex = `0`;
        if (counter === i) {
            reviewCard[i].style.backgroundColor = "white";
            reviewCard[i].style.transform = `translateX(-${counter * 100}%) scale(1.1)`;
        }
        else {
            reviewCard[i].style.backgroundColor = "rgb(245, 244, 244)";
            reviewCard[i].style.transform = `translateX(-${counter * 100}%) scale(0.9)`;
        }
    }

}


const defaultStyling = () => {
    for (let i = 0; i < reviewCard.length; i++) {
        if (i === 0) {
            reviewCard[i].style.backgroundColor = "white";
            reviewCard[i].style.transform = `scale(1.1)`;
            reviewCard[i].style.zIndex = `0`;
        }
        else {
            reviewCard[i].style.backgroundColor = "rgb(245, 244, 244)";
            reviewCard[i].style.transform = `scale(0.9)`;

        }
    }
}



const changingMediaQuery = () => {

    if (window.innerWidth >= 100) {
        navbar.style.marginTop = "0"
        closeNavbar();
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].style.color = "white";
            navbarLinks[i].style.fontSize = "14px";
            navbarLinks[i].style.fontWeight = "normal";
        }
    }
    if (window.innerWidth >= 850) {
        navbar.style.display = "flex";
        header.style.backgroundColor = "transparent";
        navbarIcons.style.display = "flex";
    }
    scrolledNavigation()

}


window.addEventListener('resize', changingMediaQuery);



// Changing navbar styling when the scroll height is more than or equal 100
let scrolledNavigation = () => {
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        header.style.top = "0";
        header.style.padding = "20px 0";
        header.style.backgroundColor = "#004dff";
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.top = "0";
        header.style.padding = "20px 0";
    }
};

window.onscroll = scrolledNavigation