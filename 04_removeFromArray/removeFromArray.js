const removeFromArray = function(arr, ...val) {
    let ans=arr;
    console.log(val.length) // why isn't val capturing all input parameters??
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<val.length;j++) {
            if(arr[i]===val[j]) {
                let removed=arr.splice(i,1);
            }
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
