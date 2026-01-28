const repeatString = function(string, num) {
    let arr = [];
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            arr.push(string);
        }
    }
    else {
        return "ERROR"
    }       
    return arr.join('')
};

// Do not edit below this line
module.exports = repeatString;
