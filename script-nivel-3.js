import { CAR_DATA } from "./script-nivel-3-data.js";

displaySelectedCars(selectCarByPrice(CAR_DATA));


function selectCarByPrice(data) {
    const selectedCars = data;
    for (let i = 0; i < data.length; i++) {
        // selectedCars[i] = {"nume" : data[i]["nume"]};
        for (let j = 0; j < data[i]["masini"].length; j++) {
            if (data[i]["masini"][j]["pret"] > 100) {
                selectedCars[i]["masini"][j] = {};
            }
        }
    }
    return selectedCars;
}


function displaySelectedCars(cars) {
    for (let i = 0; i < cars.length; i++) {
        document.getElementById("result").innerHTML += cars[i]["nume"] + "<br>";
        
        let contor = 0;
        for (let j = 0; j < cars[i]["masini"].length; j++) {
            if (cars[i]["masini"][j]["pret"]) {
                document.getElementById("result").innerHTML += cars[i]["masini"][j]["pret"] + "<br>";
                contor++;
            }
        }
                    
        if (! contor) {
            document.getElementById("result").innerHTML += "Nu au la vanzare masini cu pretul sub 100" + "<br>";
        }
    
        document.getElementById("result").innerHTML += "<br>";
    }
}
