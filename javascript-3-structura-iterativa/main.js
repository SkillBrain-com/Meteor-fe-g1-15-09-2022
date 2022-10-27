console.log("Structura itertiva si liste");

const whetherTempList = [16, 17, 17, 18, 17, 18, 19, 18];
const whetherDayList = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica", "Luni"];

let tempSum = 0;

for(let i = 0; i < whetherTempList.length; i++) {
    console.log(`In ziua ${whetherDayList[i]} temperatura este ${whetherTempList[i]}`);
    tempSum += whetherTempList[i];
}

console.log(`Suma temperaturilor este ${tempSum}`);
const avgTemp = tempSum / whetherTempList.length; //average temperature - temperatura medie
console.log(`Temperatura medie pe urmatoarele ${whetherTempList.length} este ${avgTemp}`);