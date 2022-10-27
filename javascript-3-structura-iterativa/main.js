console.log("Structura itertiva si liste");

const wheatherMaxTempList = [16, 17, 17, 18, 17, 18, 19, 18];
const wheatherMinTempList = [4, 4, 6, 7, 5, 6, 6, 5];
const wheatherDayList = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica", "Luni"];
const results = [];

let sumTempMax = 0;
let sumTempMin = 0;

for(let i = 0; i < wheatherMaxTempList.length; i++) {
    const maxOfTheDay = wheatherMaxTempList[i];
    const minOfTheDay = wheatherMinTempList[i];
    sumTempMax += maxOfTheDay;
    sumTempMin += minOfTheDay;
}

const avgTempMax = sumTempMax / wheatherMaxTempList.length;
const avgTempMin = sumTempMin / wheatherMinTempList.length;
const avgTempAvg = (avgTempMax + avgTempMin) / 2;

console.log(`Media maximelor este ${avgTempMax}°C`);
console.log(`Media minimelor este ${avgTempMin}°C`);
console.log(`Media mediilor este ${avgTempAvg}°C`);


for(let i = 0; i < wheatherMaxTempList.length; i++) {
    const maxOfTheDay = wheatherMaxTempList[i];
    const minOfTheDay = wheatherMinTempList[i];

    sumTempMax += maxOfTheDay;
    sumTempMin += minOfTheDay;
    
    const averageOfTheDay = (maxOfTheDay + minOfTheDay) / 2;

    if (averageOfTheDay > avgTempAvg) {
        console.log(`${wheatherDayList[i]}: Max:${maxOfTheDay}°C min:${minOfTheDay}°C avg:${averageOfTheDay}°C`);
        results.push(averageOfTheDay);
    }
}

console.log(`Exista ${results.length} zile care au temperatura mai mare decat media din aceasta perioada (${avgTempAvg})°C`);
console.log(results);