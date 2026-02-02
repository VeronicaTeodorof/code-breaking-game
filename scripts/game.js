document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-button");
    let computerCode = generateCode();
    
    // Add event listeners
    playButton.addEventListener("click", changeButton);
    playButton.addEventListener("click", enterCodeMessage);
    playButton.addEventListener("click", cursorReady);

    document.querySelector("form").addEventListener("submit", showData);

    // Change the text of the play button
    function changeButton() {
        playButton.innerText = "Quit";
    }

    function enterCodeMessage() {
        messageEnterCode = document.getElementById("message");
        messageEnterCode.innerHTML = "<h2>Enter code here:</h2>";
    }

    // Sets the cursor ready for the user to type the first input
    function cursorReady() {
        document.getElementById("input1").focus();
    }

    // Moves cursor to the next input after user enters a value
    function moveFocus() {
        let inputBoxes = document.querySelectorAll(".input");
    
        for(let i = 0; i < inputBoxes.length - 1; i++) {
            inputBoxes[i].addEventListener("input", () => inputBoxes[i+1].focus());
        }
    }
    moveFocus();

    // Generates a 4 digit random code:
    function generateCode() {
    
        let digit1 = generateDigit();
        let digit2 = generateDigit();
        let digit3 = generateDigit();
        let digit4 = generateDigit();

        let computerCode = [digit1, digit2, digit3, digit4];
        console.log(computerCode);
        return computerCode;
    };

    // generateCode();

    // Generates a random digit
    function generateDigit() {
        let digit = Math.floor(Math.random() * 10);
        return digit;
    }

    function showData(e) {
        e.preventDefault();
        myForm = e.target;

        let input1 = parseInt(myForm.input1.value);
        let input2 = parseInt(myForm.input2.value);
        let input3 = parseInt(myForm.input3.value);
        let input4 = parseInt(myForm.input4.value);
        let guessCode = [input1, input2, input3, input4];
        console.log(guessCode);

        
        
        for(let input of guessCode) {
            if(input > 9 || input < 0) {
                alert("Please only enter one digit integers from 0 to 9 included");
            } else {
                let para = document.querySelector(".guess-paragraph");
                para.innerText = `${guessCode}`;  // Writes guessCode in feedback area
                checkAnswer();
                myForm.reset(); // Empties input fields without refreshing the page
            }
        }

        function checkAnswer() {
            let numCorrect = 0;
            let splicedComputerCode;
            let splicedGuessCode;

            // Code to find numCorrect
            // for(let i = 0; i < guessCode.length; i++) {
            //     if(guessCode[i] === computerCode[i]) {
            //         numCorrect++;
            //         if(numCorrect === 4) { 
            //             alert("You guessed!");
            //     }
            // }
            // console.log(numCorrect);
            

            // Hard code for removing mathcing pairs from their respective arrays when all 4 digits are guessed
            if(computerCode[0] === guessCode[0]) {
                numCorrect++;
                splicedComputerCode = computerCode.toSpliced(0, 1);
                splicedGuessCode = guessCode.toSpliced(0, 1);
                if(computerCode[1] === guessCode[1]) {
                    numCorrect++;
                    splicedComputerCode = splicedComputerCode.toSpliced(0, 1);
                    splicedGuessCode = splicedGuessCode.toSpliced(0, 1);
                    if(computerCode[2] === guessCode[2]) {
                        numCorrect++;
                        splicedComputerCode = splicedComputerCode.toSpliced(0, 1);
                        splicedGuessCode =splicedGuessCode.toSpliced(0,1);
                        if(computerCode[3] === guessCode[3]) {
                            numCorrect++;
                            splicedComputerCode = splicedComputerCode.toSpliced(0, 1);
                            splicedGuessCode = splicedGuessCode.toSpliced(0, 1);
                        }
                    }
                }
            } 
            console.log(numCorrect);
            console.log(splicedComputerCode);
            console.log(splicedGuessCode);
        }
        
        
        
    }

});

