function cautareDupaInitiala(v, a) {
    let j=0;
for(let i=0;i < v.length; i++){
const nume=v[i];
if(nume.charAt(0)===a){
    console.log(`${v[i]} `);
    j=1;
}
}
if(j===0)
console.log(null)
}

const sirDeNume = ["Ana","Maria","Luci","Nicu", "Antonia", "Gica", "Cristina", "Giorgiana", "Alexandra", "Valentina", "Filip", "Cezar", "Marius", "Robert", "Mihai", "Rares"];
const initiala = "G"
cautareDupaInitiala(sirDeNume,initiala)