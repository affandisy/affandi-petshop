const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen =navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollRevealOption().reveal(".header-content h4", {
    ...scrollRevealOption,
});
scrollRevealOption().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
});
scrollRevealOption().reveal(".header-content h2", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollRevealOption().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1500,
});
scrollRevealOption().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 2000,
});

scrollRevealOption().reveal(".intro-card", {
    ...scrollRevealOption,
    interval: 500,
});

scrollRevealOption().reveal(".about-row:nth-child(3) .about-image img, .about-row:nth-child(5) .about-image img", {
    ...scrollRevealOption,
    origin: "left",
});

scrollRevealOption().reveal(".about-row:nth-child(4) .about-image img", {
    ...scrollRevealOption,
    origin: "right",
});

scrollRevealOption().reveal(".about-content span", {
    ...scrollRevealOption,
    delay: 500,
});
scrollRevealOption().reveal(".about-content h4", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollRevealOption().reveal(".about-content p", {
    ...scrollRevealOption,
    delay: 1500,
});
scrollRevealOption().reveal(".product-card", {
    ...scrollRevealOption,
    interval: 500,
});

scrollRevealOption().reveal(".service-card", {
    duration: 1000,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    slidePerView: 2,
    spaceBetween: 20,
    loop: true,
})