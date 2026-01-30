const sumAll = function(num1, num2) {
    let array = [];
    if ((num1 < 0) || (num2 < 0) || (Number.isInteger(num1) === false) || 
    (Number.isInteger(num2) === false) || 
    (num1 == NaN) || (num2 == NaN)) {
        return "ERROR";
    } else if (num2 > num1) {
        for (i=num1; i <= num2; i++) {
            array.push(i);
        }
    } else if (num1 > num2) {
        for (i=num2; i <= num1; i++) {
            array.push(i);
        }
    }
    return array.reduce((total, currentItem) => total+currentItem, 0);
};

// Do not edit below this line
module.exports = sumAll;
