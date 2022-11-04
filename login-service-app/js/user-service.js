function findUserByEmail(email){
    let utilizatorCautat = null;
    const db = getDatabase();
    for (let i = 0; i < db.length; i++) {
        if (db[i].email === email) {
            utilizatorCautat = db[i];
        }
    }

    return utilizatorCautat;
}