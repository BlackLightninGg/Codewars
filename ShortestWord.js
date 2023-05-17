// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function findShort(s) {
    let a = s.split(" ")

    let b = a[0].length

    a.map(el => el.length < b ? b = el.length : el)

    return b
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))