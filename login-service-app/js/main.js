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
const firstNameText = document.querySelector("#first-name-text");
const lastNameText = document.querySelector("#last-name-text");
const emailText = document.querySelector("#email-text");
const logoutButton = document.querySelector("#logout-button");
const adminButton = document.querySelector("#admin-button");

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

let selectedPage = null;
let user = null;

if (localStorage.getItem("userEmail") !== null) {
    user = findUserByEmail(localStorage.getItem("userEmail"));

    //daca cineva a adaugat singur o valoare in local storage?

    firstNameText.innerText = user.firstName;
    lastNameText.innerText = user.lastName;
    emailText.innerText = user.email;

    selectedPage = ROUTES.USER;
}
else {
    selectedPage = ROUTES.LOGIN;
}


loginButton.addEventListener("click", function(){
    const email = emailInput.value;
    const password = passwordInput.value;

    if (authorizeLogin(email, password)){
        user = findUserByEmail(email);
        localStorage.setItem("userEmail", email);

        firstNameText.innerText = user.firstName;
        lastNameText.innerText = user.lastName;
        emailText.innerText = user.email;

        selectedPage = ROUTES.USER;
        chnagePage(selectedPage);    
    }
    else {
        loginErrorText.classList.remove("hidden");
    }
});

logoutButton.addEventListener("click", function(){
    user = null;
    loginErrorText.classList.add("hidden");
    localStorage.removeItem("userEmail");
    selectedPage = ROUTES.LOGIN;
    chnagePage(selectedPage); 
});

adminButton.addEventListener("click",function(){
    alert("You are admin!");
});

chnagePage(selectedPage);