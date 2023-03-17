function maskify(cc) {
    b = [...cc]
  
      if (b.length > 4) {
          for (let i = 0; i < b.length - 4; i++) {
              b[i] = "#";
          }
      } else {
         return b.join("");
      }
      return b.join("");
  }

console.log(maskify("afasr"));
console.log(maskify("a356fas1234rhg59"));
console.log(maskify("a356fas1234rhg59%$$"));
console.log(maskify(")!"));
console.log(maskify("1"));