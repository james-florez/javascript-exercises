const repeatString = function(string,num) {
    

    if(num<0)
        return 'ERROR';
    else if (num===0)
        return '';
    else {
        let ans="";
        for (let i=0;i<num;i++) {
            ans=ans+string;
        }
        return ans;
    }
};

// Do not edit below this line
module.exports = repeatString;
