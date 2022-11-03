const input = [1,5,6,24,7,8,8,141,32,14,11,5,6,9,39,11,2,1,54,5,8];
const output = [];
let i=0;
for(i=0;i<=input.length;i++){
if(input[i] !== 0 &&  output[input[i]] === undefined){
    output[input[i]]=0;
    output[input[i]]++;
}
else if(input[i] !== 0){
    output[input[i]]++;
}
}
i=0;
for(i=0;i<=output.length;i++){
    if(output[i] !== 0 && output[i] !== undefined){

    console.log(`${i} - ${output[i]} aparitii`);
    i++;
}
}

    