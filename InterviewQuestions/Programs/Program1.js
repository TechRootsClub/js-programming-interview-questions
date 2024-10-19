// i/p = "Welcome to TechRoots Club for Learning";
// o/p = "emocleW ot stooRhceT bulC rof gninraeL";

const str = "Welcome to TechRoots Club for Learning";

const strArr = str.split(" ");
let strOutput = "";
strArr.forEach((word) => {
    for (let i = word.length - 1; i >= 0; i--) {
        strOutput = strOutput + word.charAt(i);
    }
    strOutput = strOutput + " ";

})
console.log(strOutput.trim()); //emocleW ot stooRhceT bulC rof gninraeL
