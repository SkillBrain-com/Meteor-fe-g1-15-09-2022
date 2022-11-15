/*
Se da o lista de altitudini parcurse de un robot. Calculeaza care e cea mai mare urcare facuta de catre robot.

                      3         12
Date de intrare [4, 7, 3, 9, 4, 12, 1]
Date de iesire: 9

Urcarea maxima este obtinuta prin diferenta dintre 12 si 3
*/

// const initial = [4, 7, 3, 9, 4, 12, 1];
// let altMax = 0; // 9
// let min = initial[0]; // 1
// for (let i = 0; i < initial.length; i++) {
//   const urcare = initial[i] - min;
  
//   if (altMax < urcare){
//     altMax = urcare;
//   }
  
//   if (initial[i] < min) {
//     min = initial[i];
//   }
// }

// console.log(altMax);


// if minim < i
// minim = i;

// if maxim > i {
// maxim = i;
// minimAbs = minim;
// }

/**/
const initial = [4, 7, 3, 9, 4, 12, 1];

let minimTemp = initial[0]; // 1
let max = 0; // 12
let minimAbs = 0; // 3
for (let i = 0; i < initial.length; i++) {
  if (minimTemp > initial[i]) {
    minimTemp = initial[i];
  }
  if (max < initial[i]) {
    max = initial[i];
    minimAbs = minimTemp;
  }
}
console.log(max - minimAbs);