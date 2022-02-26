const fibonacci = function(num) {
    if (num < 1){
        return "OOPS";
    }
    
    let n1 = 0;
    let n2 = 1;
    let nextNum = 0;

    for (let i = 1; i <= num; i++) {
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }

    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
