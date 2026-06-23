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
// document.addEventListener("DOMContentLoaded", () => {

//     const user =
//         JSON.parse(localStorage.getItem("loggedInUser"));

//     if(user){

//         document.getElementById("profileName").textContent =
//             user.name;

//         document.getElementById("profileRole").textContent =
//             user.role;

//         document.getElementById("memberSince").textContent =
//             "Member Since: " + user.memberSince;

//         document.getElementById("profileAvatar").src =
//             user.avatar;
//     }

// });