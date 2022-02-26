const sumAll = function(firstNum, lastNum) {

    let sum = 0

    if (firstNum < 0 || lastNum < 0 || isNaN(firstNum)|| isNaN(lastNum) || typeof firstNum === 'string'||
     typeof lastNum === 'string' || typeof firstNum === 'string'|| typeof lastNum === 'string') {
        return 'ERROR';
    }else if (firstNum < lastNum){
       for (let i = firstNum; i <= lastNum; i++){
            sum += i;
        }
    }else if (firstNum > lastNum){
        for (let i = lastNum; i <= firstNum; i++){
            sum += i;
        }   
    }
        return sum;

    

};

// Do not edit below this line
module.exports = sumAll;