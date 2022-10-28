const ROUTES = {
    LOGIN: "LOGIN",
    USER: "USER"
};

/* LOGIN PAGE VARS */
const loginPage = document.querySelector("#login-page");
const loginButton = document.querySelector("#login-button");
const loginErrorText = document.querySelector("#login-error-text");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");

/* USER PAGE VARS */
const userPage = document.querySelector("#user-page");

//nextPage - pagina la care se trece
function chnagePage(nextPage){
    if (nextPage === ROUTES.LOGIN) {
        loginPage.classList.remove("hidden");
        userPage.classList.add("hidden");
    }
    else if (nextPage === ROUTES.USER){
        loginPage.classList.add("hidden");
        userPage.classList.remove("hidden");
    }
}

let selectedPage = ROUTES.LOGIN;

loginButton.addEventListener("click", function(){
    const email = emailInput.value;
    const password = passwordInput.value;

    if (authorizeLogin(email, password)){
        selectedPage = ROUTES.USER;
        chnagePage(selectedPage);    
    }
    else {
        loginErrorText.classList.remove("hidden");
    }
});

chnagePage(selectedPage);