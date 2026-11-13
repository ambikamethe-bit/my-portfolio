
// MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("#nav-menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});

// DARK MODE
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(function(section) {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// CONTACT FORM VALIDATION
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const result = document.getElementById("form-result");

    if (name === "" || email === "" || message === "") {
        result.textContent = "Please fill all fields!";
        result.style.color = "red";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        result.textContent = "Enter a valid email!";
        result.style.color = "red";
    }
    else {
        result.textContent = "Form submitted successfully!";
        result.style.color = "green";
        form.reset();
    }
});
