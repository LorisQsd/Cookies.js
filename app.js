const form = document.querySelector("form");
const createButton = form.querySelector("button[type='submit']");
const createCookieName = form.querySelector("#cookieName");
const deleteButton = document.querySelector("#delete");
const createCookieValue = form.querySelector("#cookieValue");
const inputName = form.querySelector("#name");
const inputValue = form.querySelector("#value");
const displayResult = document.querySelector(".result");
const consoleCookie = document.querySelector("#consoleCookie")

consoleCookie.addEventListener("click", consolelogCookie)

function consolelogCookie(e) {
    e.preventDefault();
    const cookieName = document.cookie.split(';')
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith("cookie"))
        .split('=')[0];
    const cookieValue = document.cookie.split(';')
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith("cookie"))
        .split('=')[1];
    document.cookie = cookieName + "=" + cookieValue + "; expires=Thu, 01 Jan 1976 00:00:00 GMT";
    console.log(document.cookie);
    console.log(document.cookie)
}

/* COOKIE */


createButton.addEventListener("click", handleForm);

function handleForm(e) {
    e.preventDefault();
    createCookie();
}

function createCookie() {
    document.cookie = "cookie" + inputName.value + "=" + inputValue.value + "; Sun Mar 24 2024 12:00:00 GMT+0100";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <p><span>Nom :</span> <span id="cookieName">${inputName.value}</span></p>
        <p><span>Valeur :</span> <span id="cookieValue">${inputValue.value}</span></p>
        <button id="delete">X</button>
    `
    displayResult.appendChild(card);
    console.log(document.cookie);
    displayCard.style.display = "flex";

}

const displayButton = document.querySelector("#displayButton");
const displayCard = document.querySelector(".result");

displayButton.addEventListener("click", displayCookie);
let toggle = true;
function displayCookie(e) {
    e.preventDefault();
    if (!toggle) {
        displayCard.style.display = "none";
        toggle = true;
    } else {
        displayCard.style.display = "flex";
        toggle = false;

        deleteButton.addEventListener('click', deleteCookie);

        function deleteCookie(e) {
            e.preventDefault();
        }
    }
}