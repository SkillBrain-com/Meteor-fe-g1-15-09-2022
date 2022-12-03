(function () {
    console.log(`exercitiul2-4`);
    const text = 'Ana mail'
    const textLength = text.length
    const firstCharacter = text.charAt(0)
    const secondCharacter = text.charAt(1)
    const lengthIsValid = textLength ===8
    const secondCharIsALetter = (secondCharacter >= 'a' && secondCharacter <= 'z') || (secondCharacter >= 'A' && secondCharacter <= 'Z')
    const firstCharIsaDigit = firstCharacter >= 0 && firstCharacter <= 9
    const hasAtSign = text.includes('@')

    console.log(`Lungime ${textLength}`)
    console.log(`Primul caracter este o cifra? ${firstCharIsaDigit}`)
    console.log(`Al doilea caracter este o litera ${secondCharIsALetter}`)
    console.log(`Contine @? ${hasAtSign}`)

    if (lengthIsValid && 
        hasAtSign &&
        (firstCharIsaDigit || secondCharIsALetter)) {
        console.log(`Textul ${text} are lungimea 8, contine @, incepe cu o cifra sau a doua litera este o litera`)
    } else {
        console.log(`Textul ${text} nu este valid`)
    }

})()
