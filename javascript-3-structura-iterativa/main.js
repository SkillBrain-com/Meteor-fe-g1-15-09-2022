console.log("Structura itertiva si liste");

const wheatherMaxTempList = [16, 17, 17, 18, 17, 18, 19, 18];
const wheatherMinTempList = [4, 4, 6, 7, 5, 6, 6, 5];
const wheatherDayList = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica", "Luni"];


for(let i = 0; i < wheatherMaxTempList.length; i++) {
    const maxOfTheDay = wheatherMaxTempList[i];
    const minOfTheDay = wheatherMinTempList[i];
    const averageTemp = (maxOfTheDay + minOfTheDay) / 2;
    console.log(`${wheatherDayList[i]}: Max:${wheatherMaxTempList[i]} min:${wheatherMinTempList[i]} avg:${averageTemp}`);
}
