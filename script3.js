console.log(`exercitiul2-3`);

const text = 'Anna0'
const textLength = text.length
const firstLetter = text.charAt(0)
const lastLetter = text.charAt(textLength - 1)
const firstLetterIsMinuscule = firstLetter >= 'a' && firstLetter <= 'z'
const lengthIsValid = textLength >= 3 && textLength <= 5
const lastLetterIsaDigit = lastLetter >= 0 && lastLetter <= 9
let message

if (lengthIsValid && (firstLetterIsMinuscule || lastLetterIsaDigit)) {
    console.log(`Textul ${text} este valid`)
} else {
    console.log(`Textul ${text} nu este valid`)
}

