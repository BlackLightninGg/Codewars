//Complete the solution so that it reverses the string passed into it.//
    function solution(str) {

    let arr = [];


    let lengthStr = str.length - 1;

    for (let i = lengthStr; i >= 0; i--) {
        arr.push(str[i])
    }

    let la = arr.join("")
    return la;

}

console.log(solution("world"));