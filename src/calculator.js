const calculator = {
    add: (a, b) => {
        if(!isNaN(a) && !isNaN(b)) {
            return a+b;
        } else {
            return null;
        }
    },
    sub: (a, b) => {
        if(!isNaN(a) && !isNaN(b)) {
            return a-b;
        } else {
            return null;
        }
    },
    div: (a, b) => {
        if(!isNaN(a) && !isNaN(b)) {
            return b!==0?a/b:null;
        } else {
            return null;
        }
    },
    mul: (a, b) => {
        if(!isNaN(a) && !isNaN(b)) {
            return a*b;
        } else {
            return null;
        }
    },
};

module.exports = calculator;