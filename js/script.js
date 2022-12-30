
let button = document.querySelector(".button");
let background = document.querySelector(".background");
let darkBackground = document.querySelector(".darkbackground");
let themeName = document.querySelector(".themeName");



button.addEventListener("click", () => {
    background.classList.toggle("darkBackground");

    if (background.classList.contains("darkBackground")) {
        themeName.innerText = "dzienny"
    } else {
        themeName.innerText = "nocny"
    }
});

let formElement = document.querySelector(".js-form");
let nameElement = document.querySelector(".js-name");
let messageElement = document.querySelector(".js-message");
let phoneElement = document.querySelector(".js-phone");
let buttonElement = document.querySelector(".js-button");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let name = nameElement.value;
    let message = messageElement.value;
    let phone = phoneElement.value;

    let nameTwoElement = document.querySelector(".js-nameTwo");


    nameTwoElement.innerText = name;
    let hidden = document.querySelector(".hidden");
    let replayElement = document.querySelector(".js-replay");

    replayElement.classList.remove("hidden");


});





