const ROUTES = {
    LOGIN: "LOGIN",
    USER: "USER"
};

/* LOGIN PAGE VARS */
const loginPage = document.querySelector("#login-page");
const loginButton = document.querySelector("#login-button");

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
    selectedPage = ROUTES.USER;
    chnagePage(selectedPage);    
});

chnagePage(selectedPage);