let body = document.querySelector("body");

let invoiceView = document.getElementById("invoiceView")

// Header
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

// Invoice Date 
let invoiceDate = document.getElementById("invoiceDate");

// payment Due
let paymentDue = document.getElementById("paymentDue")

// Bill
let Bill = document.getElementById("bill");

// Send Mail
let sendMail = document.getElementById("sendMail")

// Banner Design
let bannerDesignAmount = document.getElementById("bannerDesign-amount");
let bannerDesignPrice = document.getElementById("bannerDesign-price");

// Email Design
let emailDesignAmount = document.getElementById("emailDesign-amount");
let emailDesignPrice = document.getElementById("emailDesign-price");

// Total Container
let totalContainer = document.getElementById("totalContainer");

// Edit Button
let editBtn = document.getElementById("editBtn");

// Delete Button
let deleteBtn = document.getElementById("deleteBtn");

// Mark As Paid Button
let MarkAsPaidBtn = document.getElementById("MarkAsPaidBtn");

// Prompt Container
let promptContainer = document.getElementById("promptContainer")

// Prompt Container Text
let promptContainerText = document.getElementById("promptContainerText");

// cancel Button
let cancelBtn = document.getElementById("cancelBtn");

// Prompt Delete Button
let promptDelete = document.getElementById("promptDelete")


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

    invoiceDate.innerHTML += `
        <p class = "createdAt">${invoice.createdAt}</p>
    `

    paymentDue.innerHTML += `
        <p class = "paymentDue">${invoice.paymentDue}</p>
    `

    Bill.innerHTML += `
    <p class = "clientName">${invoice.clientName}</p>
    <p class = "clientAdress">${invoice.clientAddress.street}
        <br>${invoice.clientAddress.city}
        <br>${invoice.clientAddress.postCode}
        <br>${invoice.clientAddress.country}
    `

    sendMail.innerHTML += `
        <p class = "clientEmail">${invoice.clientEmail}</p>
    `

    bannerDesignAmount.innerHTML += `
        <p class = "itemsName">${invoice.items[0].name}</p>
        <p class = "itemsQuantity">${invoice.items[0].quantity} x <span>£${invoice.items[0].total}</span></p>
    `

    bannerDesignPrice.innerHTML += `
    <p class = "itemsPrice">£${invoice.items[0].price}</p>
    `

    emailDesignAmount.innerHTML += `
        <p class = "itemsName">${invoice.items[1].name}</p>
        <p class = "itemsQuantity">${invoice.items[1].quantity} x <span>£${invoice.items[1].price}</span></p>
    `

    emailDesignPrice.innerHTML += `
        <p class = "itemsPrice">£${invoice.items[1].price}</p>
    `

    totalContainer.innerHTML += `
        <p class = total><span>£</span>${invoice.total}</p>
    `

    promptContainerText.innerHTML += `
        <p>Are you sure you want to delete invoice ${invoiceId}? This action cannot be undone.</p>
    `
}

fetchData();

// Delete Button Listener
deleteBtn.addEventListener("click", () => {
    promptContainer.style.display = "block"
    invoiceView.style.opacity = "0.4984"
});

// Cancel Button Functional
cancelBtn.addEventListener("click", () => {
    invoiceView.style.opacity = "1"
    promptContainer.style.display = "none"
});


async function deleteInvoiceData() {
    const response = await fetch(`https://invoiceapi-rpgn.onrender.com/api/invoices/${invoiceId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },

    })

    const data = await response.json();

    window.location.href = "index.html";
}

// Prompt Delete Button Functional
promptDelete.addEventListener("click", () => {
    deleteInvoiceData()
});