//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.//

function XO(str) {
  let x = str.split("x").length - 1;
  let  bigX = str.split("X").length - 1;
  let  o = str.split("o").length -1;
  let bigO = str.split("O").length - 1;

  let sumxX = x + bigX;
  let sumoO = o + bigO;

  if (sumxX === sumoO) {
    return true;
  } else {
    return false;
  }
   

}

console.log(XO("oxoxoX"));
console.log(XO("othtehy%xoX"));
console.log(XO("Oo"));