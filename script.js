function toggleMenu(){
    const menu= document.querySelector(".menu-links")
    const icon= document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Show the "Back to Top" arrow when the user scrolls down 200px from the top
// Show the "Back to Top" arrow when the user scrolls near the bottom of the page
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.querySelector(".b2p");

    // Show the button when the user scrolls down 20px from the top
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // This creates the smooth scrolling effect
        });
    });
});
