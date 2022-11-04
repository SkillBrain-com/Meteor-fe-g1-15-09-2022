function initializeDB(){
    const DB_INITIALIZED_KEY = "dbInitilized";
    const timestamp = localStorage.getItem(DB_INITIALIZED_KEY);

    if (timestamp === null) {
        const now = new Date();
        const newTimestamp = now.getTime();
        localStorage.setItem(DB_INITIALIZED_KEY, newTimestamp);
        console.log(`DB HAS BEEN CREATED AT ${now}`);
    }
    else {
        const initilizationDate = new Date(Number(timestamp));
        console.log(`DB CREATED ALREADY AT ${initilizationDate}`);
    }

    //daca in local storage nu se indica ca a fost initializata o baza de date
    //   notam in local storage ca a fost initializata baza de date
    //   creem o noua lista, cu un utilizator administrator
    //   transformam lista intr-un text
    //   salvam textul in local storage
}

initializeDB();