let selectedPage = "LOGIN";

const loginPage = document.querySelector("#login-page");
const userPage = document.querySelector("#user-page");
const toggleButton = document.querySelector("#toggle-button");


toggleButton.addEventListener("click", function(){
    loginPage.classList.toggle("hidden");
});
