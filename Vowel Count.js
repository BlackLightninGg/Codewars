/*Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/
function getCount(str) {
    let fa = 0;
    let ba = ["a", "e", "i", "o", "u"];
    
    for (let i of str) {
        if (ba.includes(i)) {
            fa++;
        }
        
    }
    return fa;
}


console.log(getCount("o a kak ushakov lil vo kashu kakao"));