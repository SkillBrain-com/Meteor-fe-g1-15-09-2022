function authorizeLogin(email, password) {
    let utilizatorCautat = null;
    for (let i = 0; i < DB.length; i++) {
        if (DB[i].email === email) {
            utilizatorCautat = DB[i];
        }
    }

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