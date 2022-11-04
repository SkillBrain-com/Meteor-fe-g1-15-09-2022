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

const registerForm = document.querySelector("#register-form");

const registerFirstName = document.querySelector("#register-first-name");
const registerLastName = document.querySelector("#register-last-name");
const registerEmail = document.querySelector("#register-email");
const registerPassword = document.querySelector("#register-password");
const registerButton = document.querySelector("#register-button");

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

function enableRegisterForm(user){
    if (user.permissions.includes(PERMISSIONS.CAN_ADD_NEW_USER) === false){
        registerForm.classList.add("hidden");
    }
    else{
        registerForm.classList.remove("hidden");
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
    enableRegisterForm(user);
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
        enableRegisterForm(user);   
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

registerButton.addEventListener("click",function(){
    if (user.permissions.includes(PERMISSIONS.CAN_ADD_NEW_USER)){
        
        //extragem datele
        const firstName = registerFirstName.value;
        const lastName =  registerLastName.value;
        const email =     registerEmail.value;
        const password =  registerPassword.value;

        if (firstName.length > 0 && lastName.length > 0 && email.length > 3 && password.length > 3){
            //creem un user
            const userNou = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                permissions: [],
            };

            //adauga in baza de date
            pushToDatabase(userNou);
            alert("Utilizator adaugat");
            registerFirstName.value = "";
            registerLastName.value = "";
            registerEmail.value = "";
            registerPassword.value = "";
        }
        else {
            alert("Utilzatorul nu este valid");
        }
    }
    else{
        alert("You are not Admin!");
    }
});

chnagePage(selectedPage);