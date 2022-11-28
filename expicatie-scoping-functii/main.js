const textNumar = "1255.234";

const numarTransformat = Number(textNumar);

if (isNaN(numarTransformat)) {
    console.log(`${textNumar} nu poate fi un numar`);
}
else {
    const suma = numarTransformat * 2;
    console.log(suma);
}

