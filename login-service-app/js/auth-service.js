function authorizeLogin(email, password) {
    const utilizatorCautat = findUserByEmail(email);

    if (utilizatorCautat === null) {
        console.error("Utilizatorul nu exista in DB");
        return false;
    }

    if (password !== utilizatorCautat.password) {
        console.error("Parola nu este corecta");
        return false;
    }
    
    return true;
}