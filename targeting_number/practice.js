if (0) { // prompt, alert, confirm practice
    console.log(typeof(Number), Number);
    alert("경고문입니다.");
    const yesOrNo = confirm("정답인가요?");
    console.log(typeof(yesOrNo), yesOrNo);
}
if (0) { // querySelector practice
    let $$button = document.querySelectorAll('button');
    let $button = document.querySelector('button');
    console.log($$button, $button); // id is #, class is .

    let $buttonEnter = document.querySelector('.enter');
    let $buttonCancel = document.querySelector('#cancel');
    console.log($buttonEnter, $buttonCancel);

    let $spanChild = document.querySelector('div>span#word');
    let $spanDescendant = document.querySelector('div span');
    console.log($spanChild, $spanDescendant);
}
if (0) { // addEventListener(callback function) practice
    const $input = document.querySelector('input');
    const $button = document.querySelector('button');

    const onEnterLetter = (event) => {
        console.log('글자 입력', event.target.value);
    };
    const onClickButton = () => {
      console.log('버튼 클릭');  
    };

    $input.addEventListener('input', onEnterLetter);
    $button.addEventListener('click', onClickButton);
}