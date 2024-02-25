const repeatString = function(string, num) {
    if(num < 0) {
        return "ERROR";
    };
    
    let value = "";
    for (count = 1; count <= num; count++) {
        value += string;
    };

    return value;
};

// Do not edit below this line
module.exports = repeatString;
