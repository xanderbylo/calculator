function add(a, b) {
    let addSum = a + b;
    return addSum;
}

function subtract(a, b) {
    let subSum = a - b;
    return subSum;
}

function multiply(a, b) {
    let multiSum = a * b;
    return multiSum;
}

function multiply(a, b) {
    let multiSum = a * b;
    return multiSum;
}

function divide(a, b) {
    let divSum = a / b;
    return divSum;
}

function operate(a, operator, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else {
        return 'Invalid operator';
    }
}