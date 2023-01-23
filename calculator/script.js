let numOne = '';
let operator = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');


const pressNumber = (event) => {
    if (operator) {
        numTwo += event.target.textContent;
    } else {
        numOne += event.target.textContent;
    }
    $result.value += event.target.textContent;
}

const pressOperator = (op) => () => {
    $result.value = '';
    if (numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('Press number first!');
    }
}

const calculateResult = () => {
    $operator.value = '';
    let value = 0;
    if (operator == '+') value = Number(numOne)+Number(numTwo);
    if (operator == '-') value = Number(numOne)-Number(numTwo);
    if (operator == '*') value = Number(numOne)*Number(numTwo);
    if (operator == '/') value = Number(numOne)/Number(numTwo);
    $result.value = value;
}

const clearValue = () => {
    $operator.value = '';
    $result.value = '';
    numOne = '';
    numTwo = '';
    operator = '';
}

document.querySelector('#num-0').addEventListener('click', pressNumber);
document.querySelector('#num-1').addEventListener('click', pressNumber);
document.querySelector('#num-2').addEventListener('click', pressNumber);
document.querySelector('#num-3').addEventListener('click', pressNumber);
document.querySelector('#num-4').addEventListener('click', pressNumber);
document.querySelector('#num-5').addEventListener('click', pressNumber);
document.querySelector('#num-6').addEventListener('click', pressNumber);
document.querySelector('#num-7').addEventListener('click', pressNumber);
document.querySelector('#num-8').addEventListener('click', pressNumber);
document.querySelector('#num-9').addEventListener('click', pressNumber);
document.querySelector('#plus').addEventListener('click',pressOperator('+'));
document.querySelector('#minus').addEventListener('click',pressOperator('-'));
document.querySelector('#multiply').addEventListener('click',pressOperator('*'));
document.querySelector('#divide').addEventListener('click',pressOperator('/'));
document.querySelector('#calculate').addEventListener('click',calculateResult);
document.querySelector('#clear').addEventListener('click',clearValue);