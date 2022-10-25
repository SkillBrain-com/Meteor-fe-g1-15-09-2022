const input = [1,5,6,6,7,8,8,1,5,6,9,9,0,2,1,4,5,8];
const output = [0,0,0,0,0,0,0,0,0,0];
let i=0;
while(input[i] !== undefined){
    output[input[i]]++;
    i++;
}
i=0;
while(output[i] !== undefined){
    console.log(`${i} - ${output[i]} aparitii`);
    i++;
}

    