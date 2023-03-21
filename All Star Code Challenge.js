/*Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
    If no occurrences can be found, a count of 0 should be returned.*/

function strCount(str, letter) {

    let a = str.split('');
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == letter) {
            b++;
        }

    }

    return b;

}
console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
