let displayValue = document.querySelector('#display')
let displayStore = '';
let operator = '';
let resetDisplay = false;
let allowOperate = false;

let zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '0';
        resetDisplay = false;
    } else {
        displayValue.textContent += '0';
    }

    allowOperate = true;
})

let one = document.querySelector('#one');
one.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '1';
        resetDisplay = false;
    } else {
        displayValue.textContent += '1';
    }

    allowOperate = true;
})

let two = document.querySelector('#two');
two.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '2';
        resetDisplay = false;
    } else {
        displayValue.textContent += '2';
    }

    allowOperate = true;
})

let three = document.querySelector('#three');
three.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '3';
        resetDisplay = false;
    } else {
        displayValue.textContent += '3';
    }

    allowOperate = true;
})

let four = document.querySelector('#four');
four.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '4';
        resetDisplay = false;
    } else {
        displayValue.textContent += '4';
    }

    allowOperate = true;
})

let five = document.querySelector('#five');
five.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '5';
        resetDisplay = false;
    } else {
        displayValue.textContent += '5';
    }

    allowOperate = true;
})

let six = document.querySelector('#six');
six.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '6';
        resetDisplay = false;
    } else {
        displayValue.textContent += '6';
    }

    allowOperate = true;
})

let seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '7';
        resetDisplay = false;
    } else {
        displayValue.textContent += '7';
    }

    allowOperate = true;
})

let eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '8';
        resetDisplay = false;
    } else {
        displayValue.textContent += '8';
    }

    allowOperate = true;
})

let nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if (displayValue.textContent == '0' || resetDisplay == true) {
        displayValue.textContent = '9';
        resetDisplay = false;
    } else {
        displayValue.textContent += '9';
    }

    allowOperate = true;
})

let decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    if (displayValue.textContent.includes('.')) {
        return;
    } else {
        displayValue.textContent += '.';
    }
})

let divideBtn = document.querySelector('#divide');
divideBtn.addEventListener('click', () => { 
    if (allowOperate == false) {
        return;
    } else if (operator == '') {
        operator = '/';
    } else {
        displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
        operator = '/';
    }

    displayStore = displayValue.textContent;
    resetDisplay = true;
    allowOperate = false;
})

let multiplyBtn = document.querySelector('#multiply');
multiplyBtn.addEventListener('click', () => {
    if (allowOperate == false) {
        return;
    } else if (allowOperate == false) {
        return;
    } else if (operator == '') {
        operator = '*';
    } else {
        displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
        operator = '*';
    }

    displayStore = displayValue.textContent;
    resetDisplay = true;
    allowOperate = false;
})

let subtractBtn = document.querySelector('#subtract');
subtractBtn.addEventListener('click', () => {
    if (allowOperate == false) {
        return;
    } else if (operator == '') {
        operator = '-';
    } else {
        displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
        operator = '-';
    }

    displayStore = displayValue.textContent;
    resetDisplay = true;
    allowOperate = false;
})

let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    if (allowOperate == false) {
        return;
    } else if (operator == '') {
        operator = '+';
    } else {
        displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
        operator = '+';
    }

    displayStore = displayValue.textContent;
    resetDisplay = true;
    allowOperate = false;
})

let equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', () => {
    if (operator !== '') {
        displayValue.textContent = operate(displayStore, operator, displayValue.textContent);
    }
})

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    displayValue.textContent = '0';
    displayStore = '';
    operator = '';
    resetDisplay = false;
    allowOperate = false;
})

let deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {
    if (displayValue.textContent.length == 1) {
        displayValue.textContent = '0';
    } else {
        displayValue.textContent = displayValue.textContent.slice(0, -1);
    }
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
    } else if (operator == '/' && displayValue.textContent == '0') {
        return 'LOL';
    } else if (operator == '/') {
        return divide(a, b);
    } else {
        return 'Invalid operator';
    }
}