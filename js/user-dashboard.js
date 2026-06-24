// protect route
const role = localStorage.getItem("userRole");

if(!role){
    window.location.href = "index.html";
}

// logout
function logout(){
    localStorage.clear();
    window.location.href = "index.html";
}


// ============== PROFILE MODULE ===============
const email = localStorage.getItem("userEmail") || "";

const username = email.split("@")[0];

document.getElementById("userName").textContent = username;
document.getElementById("userEmail").textContent = email;
document.getElementById("avatarLetter").textContent =
username.charAt(0).toUpperCase();

// ================= SETTINGS MODULE =============

function showSection(id){

    let sections = document.querySelectorAll(".section");

    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// =============== animation ================
function toggleSidebar() {

  const sidebar = document.getElementById("sidebar");

  sidebar.classList.toggle("active");

  // Disable body scroll when sidebar is open
  if (sidebar.classList.contains("active")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}

// Close sidebar when menu item clicked
document.querySelectorAll(".sidebar a").forEach(link => {

  link.addEventListener("click", () => {

    document.getElementById("sidebar").classList.remove("active");
    document.body.classList.remove("no-scroll");

  });

});

