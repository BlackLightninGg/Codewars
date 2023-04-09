// Complete the square sum function so that it squares each number passed into it and then sums the results together.    If no occurrences can be found, a count of 0 should be returned.*/
// For example, for [1, 2, 2] it should return 1^2 + 2^2 + 2^2 = 9
function squareSum(numbers) {
let a = 0
    for (let i = 0; i <numbers.length ; i++) {
         a += numbers[i] * numbers[i]
    }
    return a
}

console.log(squareSum([1, 2]))