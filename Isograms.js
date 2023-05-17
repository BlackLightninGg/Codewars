// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str) {
    let a = str.split("")
    
    for (let i = 0; i < a.length; i++) {

        for (let k = 0; k <= a.length; k++) {
            
            if (a[i] === a[i + k + 1]) {
                return false
            }
           
        }
        
    }

    return true

}

console.log(isIsogram("Der"))
console.log(isIsogram("moose"))
console.log(isIsogram("aba"))