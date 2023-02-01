let displayValue = document.querySelector('#display')
let displayStore = '';
let operator = '';

let zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (displayValue.textContent !== '0') {
        displayValue.textContent += '0';
    }
})

let one = document.querySelector('#one');
one.addEventListener('click', () => {
    if (displayValue.textContent == '0') {
        displayValue.textContent = '1';
    } else {
        displayValue.textContent += '1';
    }
})

let two = document.querySelector('#two');
two.addEventListener('click', () => {
    if (displayValue.textContent == '0') {
        displayValue.textContent = '2';
    } else {
        displayValue.textContent += '2';
    }
})

let three = document.querySelector('#three');
three.addEventListener('click', () => {
    if (displayValue.textContent == '0') {
        displayValue.textContent = '3';
    } else {
        displayValue.textContent += '3';
    }
})

let four = document.querySelector('#four');
four.addEventListener('click', () => {
    if (displayValue.textContent == '0') {
        displayValue.textContent = '4';
    } else {
        displayValue.textContent += '4';
    }
})

let five = document.querySelector('#five');
five.addEventListener('click', () => {
    if (displayValue.textContent == '0') {
        displayValue.textContent = '5';
    } else {
        displayValue.textContent += '5';
    }
})

let six = document.querySelector('#six');
six.addEventListener('click', () => {
    if (displayValue.textContent == '0') {
        displayValue.textContent = '6';
    } else {
        displayValue.textContent += '6';
    }
})

let seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    if (displayValue.textContent == '0') {
        displayValue.textContent = '7';
    } else {
        displayValue.textContent += '7';
    }
})
let eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    if (displayValue.textContent == '0') {
        displayValue.textContent = '8';
    } else {
        displayValue.textContent += '8';
    }
})

let nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if (displayValue.textContent == '0') {
        displayValue.textContent = '9';
    } else {
        displayValue.textContent += '9';
    }
})

let divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    displayStore = displayValue;
    operator = '/';
})

let multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    displayStore = displayValue;
    operator = '*';
})

let subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    displayStore = displayValue;
    operator = '-';
})

let add = document.querySelector('#add');
add.addEventListener('click', () => {
    displayStore = displayValue;
    operator = '+';
})

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