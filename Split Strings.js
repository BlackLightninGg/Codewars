/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters
then it should replace the missing second character of the final pair with an underscore ('_').*/
function solution(str) {

    let emptyArr = [];


    for (let i = 0; i < str.length; i += 2) {

        let divideStrOnTwo = str.slice(i, i + 2);
        emptyArr.push(divideStrOnTwo);
    }


    for (let i = 0; i < emptyArr.length; i++) {
        let arrlength = emptyArr[i].length

        if (arrlength < 2) {
            let concatWithOneLetter = emptyArr[i] + "_"
            emptyArr = emptyArr.slice(0, i);
            emptyArr.push(concatWithOneLetter);
            
        }

    }

  return  arr = Array.from(emptyArr)
    


    
}

console.log(solution("abcdef"));