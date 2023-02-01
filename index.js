let displayValue = document.querySelector('#display')
let displayStore = '';
let operator = '';
let resetDisplay = false;

let zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (displayValue.textContent !== '0') {
        displayValue.textContent += '0';
    }
})

let one = document.querySelector('#one');
one.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '1';
        resetDisplay = false;
    } else {
        displayValue.textContent += '1';
    }
})

let two = document.querySelector('#two');
two.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '2';
        resetDisplay = false;
    } else {
        displayValue.textContent += '2';
    }
})

let three = document.querySelector('#three');
three.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '3';
        resetDisplay = false;
    } else {
        displayValue.textContent += '3';
    }
})

let four = document.querySelector('#four');
four.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '4';
        resetDisplay = false;
    } else {
        displayValue.textContent += '4';
    }
})

let five = document.querySelector('#five');
five.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '5';
        resetDisplay = false;
    } else {
        displayValue.textContent += '5';
    }
})

let six = document.querySelector('#six');
six.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '6';
        resetDisplay = false;
    } else {
        displayValue.textContent += '6';
    }
})

let seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '7';
        resetDisplay = false;
    } else {
        displayValue.textContent += '7';
    }
})

let eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '8';
        resetDisplay = false;
    } else {
        displayValue.textContent += '8';
    }
})

let nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '9';
        resetDisplay = false;
    } else {
        displayValue.textContent += '9';
    }
})

let divideBtn = document.querySelector('#divide');
divideBtn.addEventListener('click', () => { 
    if (operator == '') {
        operator = '/';
    } else {
        displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
        operator = '/';
    }

    displayStore = displayValue.textContent;
    resetDisplay = true;
})

let multiplyBtn = document.querySelector('#multiply');
multiplyBtn.addEventListener('click', () => {
    if (operator == '') {
        operator = '*';
    } else {
        displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
        operator = '*';
    }

    displayStore = displayValue.textContent;
    resetDisplay = true;
})

let subtractBtn = document.querySelector('#subtract');
subtractBtn.addEventListener('click', () => {
    if (operator == '') {
        operator = '-';
    } else {
        displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
        operator = '-';
    }

    displayStore = displayValue.textContent;
    resetDisplay = true;
})

let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    if (operator == '') {
        operator = '+';
    } else {
        displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
        operator = '+';
    }

    displayStore = displayValue.textContent;
    resetDisplay = true;
})

let equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', () => {
    displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
})

function add(a, b) {
    let addSum = parseFloat(a) + parseFloat(b);
    return addSum;
}

function subtract(a, b) {
    let subSum = parseFloat(a) - parseFloat(b);
    return subSum;
}

function multiply(a, b) {
    let multiSum = parseFloat(a) * parseFloat(b);
    return multiSum;
}

function multiply(a, b) {
    let multiSum = parseFloat(a) * parseFloat(b);
    return multiSum;
}

function divide(a, b) {
    let divSum = parseFloat(a) / parseFloat(b);
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