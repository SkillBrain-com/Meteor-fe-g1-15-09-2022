function findUserByEmail(email){
    let utilizatorCautat = null;
    for (let i = 0; i < DB.length; i++) {
        if (DB[i].email === email) {
            utilizatorCautat = DB[i];
        }
    }

    return utilizatorCautat;
}