const nameList =  ["Ana", "Maria", "Luci", "Nicu", "Antonia", "Gica", "Cristina"];

function sortByLetter (list,letter) {
  let res = [];
  for (let i = 0; i < list.length; i ++) {
  if (list[i].startsWith(letter)) res.push(list[i]) 
    
  }
  return res;
}
const startsWithLetter = sortByLetter(nameList, "A");

console.log(startsWithLetter);