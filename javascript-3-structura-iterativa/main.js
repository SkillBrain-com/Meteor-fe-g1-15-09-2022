console.log("Structura itertiva si liste");

const wheatherMaxTempList = [16, 17, 17, 18, 17, 18, 19, 18];
const wheatherMinTempList = [4, 4, 6, 7, 5, 6, 6, 5];
const wheatherDayList = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica", "Luni"];

let sumTempMax = 0;
let sumTempMin = 0;
let sumTempAvg = 0;

for(let i = 0; i < wheatherMaxTempList.length; i++) {
    const maxOfTheDay = wheatherMaxTempList[i];
    const minOfTheDay = wheatherMinTempList[i];

    sumTempMax += maxOfTheDay;
    sumTempMin += minOfTheDay;
    
    const averageTemp = (maxOfTheDay + minOfTheDay) / 2;
    sumTempAvg += averageTemp;

    if (averageTemp > 0) {
        console.log(`${wheatherDayList[i]}: Max:${maxOfTheDay}°C min:${minOfTheDay}°C avg:${averageTemp}°C`);
    }
}

const avgTempMax = sumTempMax / wheatherMaxTempList.length;
const avgTempMin = sumTempMin / wheatherMinTempList.length;
const avgTempAvg = sumTempAvg / wheatherMaxTempList.length;

console.log(`Media maximelor este ${avgTempMax}°C`);
console.log(`Media minimelor este ${avgTempMin}°C`);
console.log(`Media mediilor este ${avgTempAvg}°C`);
