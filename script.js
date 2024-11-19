const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  // console.log("The hamburger button was clicked.");

    if (navLinks.style.display == 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        // hamburger.style.display = 'none';
    }
});
