let body = document.querySelector("body");
let header = document.querySelector("header")


// Theme 
let iconSun = document.getElementById("icon-sun");
let iconMoon = document.getElementById("icon-moon");

iconMoon.addEventListener("click", () => {
    iconSun.style.display = "block";
    iconMoon.style.display = "none";
    header.style.background = "#1e2139"


    body.classList.add("dark");
});

iconSun.addEventListener("click", () => {
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
    header.style.background = "#373b53"

    body.classList.add("dark");
});

// Go Back Invoices
let arrowLeft = document.getElementById("arrow-left");

arrowLeft.addEventListener("click", () => {
    window.location.href = "index.html"
})