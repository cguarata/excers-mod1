"use strict"
function checker(numb) {
    const numberToString = numb.toString();
    for (let i = 0; i < numberToString.length; i++) {
        if (numberToString[i] !== "1" && numberToString[i] !== "0") {
            return 10;
        }
    }
    return 2;
}
function conversor(numb, core) {
    let numbArray = [];
    let result = 0;
    let source = checker(numb);

    if(core === 10) {
        source = 10;
    }

    switch(source) {
        case 2:
            //binario a decimal
            numbArray = String(numb)
                .split("")
                .reverse()
                .map((numb) => {
                    return Number(numb);
                });
            for (let i = 0; i < numbArray.length; i++) {
                result += numbArray[i] * Math.pow(2, i);
            }
            break;
        case 10:
            while (numb >= 1) {
                if (numb % 2 === 0) {
                    numbArray.push("0");
                } else {
                    numbArray.push("1");
                }
                numb = Math.trunc(numb / 2);
            }
            numbArray.reverse();

            for (let i = 0; i < numbArray.length; i++) {
                if (numbArray[i] === "1") {
                    result += Math.pow(10, numbArray.length - i - 1);
                }
            }
            break;
    }
    return result;
}
console.log(conversor(55)); 
console.log(conversor(1000111111)); 
console.log(conversor(55, 2)); 