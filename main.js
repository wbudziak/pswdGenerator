        let chars = {
        lowerCase: "qwertyuiopasdfghjklzxcvbnm",
        upperCase: "QWERTYUIOPASDFGHJKLZXCVBNM",
        numbers: "1234567890",
        symbols: "@#$%^&*()-_=+/?><",
        }
        const pswdInput = document.querySelector('.pswdInput');
        const progress = document.querySelector('.progress');
        const input = document.querySelector('.slider');
        const pswdlenght = document.querySelector('.value');
        const refresh = document.querySelector('.refresh');
        const copy = document.querySelector('.copy');
        const icon = document.querySelector('.fas');
        const checkLower = document.querySelector('.offLower');
        const checkUpper = document.querySelector('.offUpper');
        const checkSymbols = document.querySelector('.offSymbols');
        const checkNumbers = document.querySelector('.offNumbers');

        let newPassword = '';
        let inputLength = 0;
        charsNumber = 11;
        let rotateDeg = 0;

        const slider = (e)=>{
            inputLength = e.target.value;
            inputLength = parseInt(inputLength);
            pswdlenght.textContent = `lenght ${e.target.value}`;
            if(e.target.value >= 11){
            progress.classList.add('green');
            }
            if(e.target.value <=10 ){
                progress.classList.remove('green');
                progress.classList.add('orange');
            }
            if(e.target.value <= 7){
                progress.classList.remove('orange');
                progress.classList.add('red');
            }
            charsNumber = inputLength;
            generatePassword();
        }
        const generatePassword = ()=>{
            newPassword = '';
            pswdInput.value = "";
            for(let i=0; i < charsNumber; i++){
                let generate = Math.floor(Math.random()* (chars.symbols.length + chars.lowerCase.length + chars.upperCase.length + chars.numbers.length
                ));
                newPassword += (chars.symbols + chars.lowerCase + chars.upperCase + chars.numbers)[generate];
            }  
            if(chars.symbols === "" && chars.lowerCase === "" && chars.upperCase === "" && chars.numbers === ""){
                return;
            }
            pswdInput.value = newPassword;
        }
        generatePassword();
        refresh.addEventListener('click',()=>{
            rotateDeg += 360;
            icon.style.transform = `rotate(${rotateDeg}deg)`;
            generatePassword();
        })
        const copyFunction = ()=>{
            pswdInput.select();
            pswdInput.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("copied");
        }
        copy.addEventListener('click', copyFunction);
        input.addEventListener('input', slider);
        
        let lowerCheck = false;
        checkLower.addEventListener('click', ()=>{
            if(lowerCheck){
                lowerCheck = !lowerCheck;
                checkLower.classList.remove('unChecked');
                chars.upperCase = 'qwertyuiopasdfghjklzxcvbnm';
                generatePassword();
            }else{
                lowerCheck = !lowerCheck;
                checkLower.classList.add('unChecked');
                chars.lowerCase = '';
                generatePassword();
            }
        })
        let upperCheck = false;
        checkUpper.addEventListener('click', ()=>{
            if(upperCheck){
                upperCheck = !upperCheck;
                checkUpper.classList.remove('unChecked');
                chars.upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
                generatePassword();
            }else{
                upperCheck = !upperCheck;
                checkUpper.classList.add('unChecked');
                chars.upperCase = '';
                generatePassword();
            }
        })
        let symbolsCheck = false;
        checkSymbols.addEventListener('click', ()=>{
            if(symbolsCheck){
                symbolsCheck = !symbolsCheck;
                checkSymbols.classList.remove('unChecked');
                chars.symbols = '@#$%^&*()-_=+/?><';
                generatePassword();
            }else{
                symbolsCheck = !symbolsCheck;
                checkSymbols.classList.add('unChecked');
                chars.symbols = '';
                generatePassword();
            }
        })
        let numbersCheck = false;
        checkNumbers.addEventListener('click', ()=>{
            if(numbersCheck){
                numbersCheck = !numbersCheck;
                checkNumbers.classList.remove('unChecked');
                chars.numbers = '1234567890';
                generatePassword();
            }else{
                numbersCheck = !numbersCheck;
                checkNumbers.classList.add('unChecked');
                chars.numbers = '';
                generatePassword();
            }
        })
