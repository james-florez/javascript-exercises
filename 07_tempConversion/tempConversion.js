const ftoc = function(tempF) {
    // C = (F - 32) * 5/9
    let tempC = (tempF - 32) * 5 / 9
    return +tempC.toFixed(1);
};

const ctof = function(tempC) {
    // F = C * 9/5 + 32
    let tempF = tempC * 9 / 5 + 32
    return +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
