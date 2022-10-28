const ROUTES = {
    LOGIN: "LOGIN",
    USER: "USER"
};

/* LOGIN PAGE VARS */
const loginPage = document.querySelector("#login-page");
const loginButton = document.querySelector("#login-button");

/* USER PAGE VARS */
const userPage = document.querySelector("#user-page");


let selectedPage = ROUTES.LOGIN;

loginButton.addEventListener("click", function(){
    selectedPage = ROUTES.USER;
    
    if (selectedPage === ROUTES.LOGIN) {
        loginPage.classList.toggle("hidden");
        userPage.classList.toggle("hidden");
    }
    else if (selectedPage === ROUTES.USER){
        loginPage.classList.toggle("hidden");
        userPage.classList.toggle("hidden");
    }
});


if (selectedPage === ROUTES.LOGIN) {
    loginPage.classList.toggle("hidden");
}
else if (selectedPage === ROUTES.USER){
    userPage.classList.toggle("hidden");
}
