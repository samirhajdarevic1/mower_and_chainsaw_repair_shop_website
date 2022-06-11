const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");
// Display Mobile menu
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//show active menu when scrolling
const higlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const servicesMenu = document.querySelector("#services-page");
    const teamMenu = document.querySelector("#team-page");
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);

    if (window.innerWidth > 960 && scrollPosition < 600) {
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        teamMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 1400) {
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        servicesMenu.classList.remove("highlight");
        teamMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 2345) {
        servicesMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        teamMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 2555) {
        servicesMenu.classList.remove("highlight");
        teamMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        homeMenu.classList.remove("highlight");
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPosition < 600) || elem) {
        elem.classList.remove("highlight");
    }
};
window.addEventListener("scroll", higlightMenu);
window.addEventListener("click", higlightMenu);

//close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    menuLinks.classList.remove("active");
};
menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

//scrolling images
var counter = 1;
setInterval(function() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);