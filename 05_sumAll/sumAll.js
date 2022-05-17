const sumAll = function(val1, val2) {
    // Validate input
    if (! Number.isInteger(val1) || ! Number.isInteger(val2) || val1 < 0 || val2 < 0) {
        return "ERROR";
    }

    // Order input
    let minVal = Math.min(val1, val2)
    let maxVal = Math.max(val1, val2)
    
    let ans = 0;
    for(let i = minVal; i <= maxVal; i++) {
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
