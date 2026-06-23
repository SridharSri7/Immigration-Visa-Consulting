// =================
// protect route
const role = localStorage.getItem("userRole");
const email = localStorage.getItem("userEmail");

if (!role || !email) {
    window.location.href = "index.html";
}

// =================
// extract name from email
function getNameFromEmail(email) {
    return email.split("@")[0];
}

// =================
// show user info in dashboard
document.addEventListener("DOMContentLoaded", () => {

    const nameEl = document.getElementById("userName");
    const emailEl = document.getElementById("userEmail");
    const roleEl = document.getElementById("userRole");

    if (nameEl) nameEl.textContent = getNameFromEmail(email);
    if (emailEl) emailEl.textContent = email;
    if (roleEl) roleEl.textContent = role;
});

// =================

function showSection(id){

    // hide all sections
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    // show selected section
    document.getElementById(id).classList.add("active");
}

// default open dashboard
window.onload = function(){
    showSection("dashboard");
}

function logout(){
    alert("Logging out...");
    // window.location.href = "login.html";
}

// ===================
function revealOnScroll() {
    const elements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-up, .reveal-zoom"
    );

    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);