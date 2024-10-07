


function calculate(num1,num2,operator){
    if (operator === '+'){
        return num1 + num2
    }else if (operator === '-'){
        return num1 - num2
    }else if(operator === '/'){
        return num1 / num2
    }else if(operator === '*'){
        return num1 * num2
    }else if(operator === '%'){
        return (num1 % num2)
    }else{
        return "Invalid Operator"
    }
}

const num1 = 15;
const num2 = 3;
const operator = '/';

const result = calculate(num1,num2,operator);
console.log("Result: " + result.toFixed(2));