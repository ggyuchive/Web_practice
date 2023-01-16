const onEnterLetter = (event) => {
    str = event.target.value;
};

const onClickEnter = () => {
    if (str.length==2 && operator.includes(str[0]) && str[1]>='1' && str[1]<='9') {
        let num = Number(str[1]);
        let tag = 0; // win:tag=1, lose:tag=-1
        if (str[0]==operator[0]) currentNumber+=num;
        if (str[0]==operator[1]) currentNumber-=num;
        if (str[0]==operator[2]) currentNumber*=num;
        if (str[0]==operator[3]) {
            if (currentNumber%num > 0) tag=-1; 
            currentNumber/=num;
        }
        if (currentNumber > targetNumber || currentNumber <= 0) tag=-1;
        if (currentNumber == targetNumber) tag=1;
        if (tag==1) {
            alert("Player "+$order.textContent+" is Win!");
        }
        if (tag==-1) {
            alert("Player "+$order.textContent+" is Lose!");
        }
        $curNum.textContent = currentNumber;
        $input.value = '';
        $order.textContent++;
        if ($order.textContent>player) $order.textContent=1;
    }
    else {
        alert("Wrong Input. Enter again.");
        $input.value = '';
    }
};

const onClickCancel = () => {
    $input.value = '';
};

const $input = document.querySelector('input');
const $buttonEnter = document.querySelector('#enter');
const $buttonCancel = document.querySelector('#cancel');
const $order = document.querySelector('#order');
const $tarNum = document.querySelector('#tarNum');
const $curNum = document.querySelector('#curNum');
const operator = ['+','-','*','/'];

let player = parseInt(prompt("Please enter the number of player"));

let targetNumber = Math.floor(Math.random()*100+101);
let currentNumber = 0;
let str = '';
$tarNum.textContent = targetNumber;
$curNum.textContent = currentNumber;

$input.addEventListener('input', onEnterLetter);
$buttonEnter.addEventListener('click', onClickEnter);
$buttonCancel.addEventListener('click', onClickCancel);