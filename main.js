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
        const icon = document.querySelector('i');
        const radioLower = document.querySelector('.offLower');
        const radioUpper = document.querySelector('.offUpper');
        const radioSymbols = document.querySelector('.offSymbols');
        const radioNumbers = document.querySelector('.offNumbers');

        let newPassword = '';
        let inputLength = 0;
        charsNumber = 20;
        let rotateDeg = 0;
        
        const event = (e)=>{
            console.log(e.target.value);
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
        input.addEventListener('input', event);
        radioLower.addEventListener('click', ()=>{
            if(radioLower.checked == false){
                chars.lowerCase = '';
                generatePassword();
            }else{
                chars.lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
                generatePassword();
            }
        })
        radioUpper.addEventListener('click', ()=>{
            if(radioUpper.checked == false){
                chars.upperCase = '';
                generatePassword();
            }else{
                chars.upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
                generatePassword();
            }
        })
        radioSymbols.addEventListener('click', ()=>{
            if(radioSymbols.checked == false){
                chars.symbols = '';
                generatePassword();
            }else{
                chars.symbols = '@#$%^&*()-_=+/?><';
                generatePassword();
            }
        })
        radioNumbers.addEventListener('click', ()=>{
            if(radioNumbers.checked == false){
                chars.numbers = '';
                generatePassword();
            }else{
                chars.numbers = '1234567890';
                generatePassword();
            }
        })
        const generatePassword = ()=>{
            newPassword = '';
            pswdInput.value = "";
            for(let i=0; i < charsNumber; i++){
                let generate = Math.floor(Math.random()* (chars.symbols.length + chars.lowerCase.length + chars.upperCase.length + chars.numbers.length
                ));
                newPassword += (chars.symbols + chars.lowerCase + chars.upperCase + chars.numbers)[generate];
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
        copy.addEventListener('click', copyFunction)

