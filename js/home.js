const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==================== ELIGIBILITY SECTION ===========================
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("🎉 Your eligibility is being analyzed. Our expert will contact you soon!");
});

// ============== PARTICLE MOVING ANIMATION =============



// ============ ANIMATION ==============

// ============ 
// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(el => observer.observe(el));


// OPTIONAL: SPEED CONTROL ON SCROLL
let track = document.getElementById("newsTrack");

window.addEventListener("scroll", () => {
    let speed = 25 - window.scrollY / 100;

    if(speed < 10) speed = 10;

    track.style.animationDuration = speed + "s";
});