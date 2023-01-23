if (0) { // function 연습

    if (0) {
        function pressNumber2(letter) {
            if (operator) {
                numTwo += letter;
            } else {
                numOne += letter;
            }
            $result.value += letter;
        }
        document.querySelector('#num-0').addEventListener('click',()=>{pressNumber2('0');});
    }

    if (0) {
        // high order function
        const pressNumber3 = (letter) => {
            return () => {
                if (operator) {
                    numTwo += letter;
                } else {
                    numOne += letter;
                }
                $result.value += letter;
            };
        }
        document.querySelector('#num-0').addEventListener('click',pressNumber3('0'));
    }
}

if (0) { // high order function understanding
    const func = (number) => {
        // innerFunc
        return () => {
            console.log(number);
        };
    };
    const innerFunc = func(number);

    const func2 = (number) => () => {
        console.log(number);
    };
}