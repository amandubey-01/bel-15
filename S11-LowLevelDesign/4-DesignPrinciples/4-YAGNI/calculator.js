// PM comes to you and says that I want a calculator which can help me with addition and subtraction of numbers.

class Calculator {
    constructor () {
        this.result = 0;
    }
    add (a,b) {
        this.result = a + b;
        return this.result;
    }

    subtract (a,b) {
        this.result = a - b;
        return this.result;
    }

    multiply (a,b) {
        this.result = a * b;
        return this.result;
    }

    divide (a,b) {
        if (b=== 0){
            throw new Error("Cannot divide by zero");
        }

        this.result = a / b;
        return this.result;
    }
}

// This calculator can add, subtract, multiply, divide. However the need was just add and subtract. Why to include
// multiply and divide. So YAGNI just says focus on problem statement. And then what ever is needed try to write code
// from that perspective. However, we have include multiply and divide but we haven't included the edge cases for
// addition and subtraction. We could have included them had we focused on them particularly. Like type checks 
// if a and b are strings or something.