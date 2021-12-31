const reverseString = function(str) {
    let stack=[];
    for(let i=0;i<str.length;i++) {
        stack.push(str[i]);
    }
    let reverseStr="";
    while(stack.length>0) {
        reverseStr+=stack.pop();
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
