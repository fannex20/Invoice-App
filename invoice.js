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
});

// Invoice Id
let invoiceId = "XM9141"

// Status Info
let statusInfo = document.getElementById("statusInfo");

// Profession
let profession = document.getElementById("profession");

// Location Info
let locationInfo = document.getElementById("locationInfo")

async function fetchData() {
    const response = await fetch("data.json");
    const data = await response.json();
    const invoice = data.find(obj => obj.id == invoiceId);

    statusInfo.innerHTML += `
        <div class="circle"></div>
        <p>${invoice.status}</p>
    `

    profession.innerHTML += `
        <p class = "invoice-id"><span class = "symbol">#</span>${invoice.id} </p>
        <p class = "description">${invoice.description} </p>   
    `

    locationInfo.innerHTML += `
     <p class = "senderAddress">
        ${invoice.senderAddress.street}
         <br>${invoice.senderAddress.city}
         <br>${invoice.senderAddress.postCode}
         <br>${invoice.senderAddress.country}
    </p>
    `
}

fetchData();