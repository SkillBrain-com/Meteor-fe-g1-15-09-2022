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
//artificiu pentru simplitudine
initializeDB();


function getDatabase(){
    //extragem baza de date sub forma unui text din local storage
    const databaseJsonText = localStorage.getItem(DB_KEY);  

    //transformam baza de date intr-o lista
    const database = JSON.parse(databaseJsonText);

    return database;
}

//primeste un nou utilizator
function pushToDatabase(user){
    //se citeste baza de date existenta si se adauga intr-o lista noua
    const newDb = getDatabase();

    //in lista noua adaugam utilizatorul nou
    newDb.push(user);
    
    //resalvam baza de date
    const dbString = JSON.stringify(newDb);
    localStorage.setItem(DB_KEY, dbString);
}