document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".menu-area");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

// Decreases the size of the navbar when scrolling down
window.onscroll = function() {
    let navbar = document.querySelector('.menu-area');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
};
