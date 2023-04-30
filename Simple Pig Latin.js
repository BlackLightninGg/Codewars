//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str) {
    const punctuations = [".", ",", ";", ":", "!", "?", "-", "_"];
    const a = str.split(' ').map(e => e.charAt(0))


    let arrayWords = str.split(' ')

    for (let i = 0; i < arrayWords.length; i++) {
        let word = arrayWords[i]
        arrayWords[i] = word.slice(1)
    }


    for (let i = 0; i < a.length; i++) {
        if (!punctuations.includes(a[i])) {
            arrayWords[i] = arrayWords[i] + a[i] + "ay"
        } else {
            arrayWords[i] = arrayWords[i] + a[i]
        }
    }


    return arrayWords.join(' ')
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));