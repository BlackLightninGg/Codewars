//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.//
function repeatStr(n, s) {
    let b
    let a = ""
    for (let i = 0; i < n; i++) {
        a += s;
        b = a;
    }
    return b;
}

console.log(repeatStr(9, "Hello"));
console.log(repeatStr(2, "a"));