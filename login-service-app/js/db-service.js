const DB_INITIALIZED_KEY = "dbInitilized";
const DB_KEY = "database";

function initializeDB(){
    const timestamp = localStorage.getItem(DB_INITIALIZED_KEY);

    //daca in local storage nu se indica ca a fost initializata o baza de date
    if (timestamp === null) {
        //   notam in local storage ca a fost initializata baza de date
        const now = new Date();
        const newTimestamp = now.getTime();
        localStorage.setItem(DB_INITIALIZED_KEY, newTimestamp);
        console.log(`DB HAS BEEN CREATED AT ${now}`);

        //   creem o noua lista, cu un utilizator administrator
        const data = [
            {
                firstName: "Admin",
                lastName: "Db",
                email: "admindb@yahoo.com",
                password: "123456",
                permissions: [
                    PERMISSIONS.CAN_PRESS_ADMIN_BUTTON
                ],
            }
        ];

        //   transformam lista intr-un text
        const json = JSON.stringify(data);

        //   salvam textul in local storage
        localStorage.setItem(DB_KEY, json);
    }
    else {
        const initilizationDate = new Date(Number(timestamp));
        console.log(`DB CREATED ALREADY AT ${initilizationDate}`);
    }
}

initializeDB();