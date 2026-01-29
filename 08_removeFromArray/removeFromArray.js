const removeFromArray = function(array, ...removal) {
    return array.filter((item) => !removal.includes(item)) 
};

// Do not edit below this line
module.exports = removeFromArray;
