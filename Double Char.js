//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let a = ''
    for (let i = 0; i < str.length; i++) {
        a += str[i] + str[i]
    }
    return a

}


console.log(doubleChar('abcd'))