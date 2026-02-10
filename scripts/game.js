document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-button");
    const submitButton = document.getElementById("submit");
    let computerCode = generateCode();
    
    // Add event listeners
    playButton.addEventListener("click", changeButton);
    playButton.addEventListener("click", enterCodeMessage);
    playButton.addEventListener("click", cursorReady);
    submitButton.addEventListener("click", cursorReady);
  
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
        let validInput;
        console.log(guessCode);
        

        for(let input of guessCode) {
            if(input > 9 || input < 0) {
                alert("Please only enter one digit integers from 0 to 9 included");
                throw new RangeError("The digit entered must be between 0 and 9."); //stops the code from running when input out of range
                
            } 
        }

        let spanGuess = document.querySelector(".guess-span");
        spanGuess.innerText = `${guessCode}`;  // Writes guessCode in feedback area
        spanGuess.classList.remove("guess-span");
        checkAnswer();
        myForm.reset(); // Empties input fields without refreshing the page
                
            
        

        function checkAnswer() {
            let numCorrect = 0;
            let numIncorrectlyPlaced = 0;
            let numIncorrect = 0;
            let splicedGuessCode = [];
            let splicedComputerCode = [];
            

            //Code to find numCorrect
            for(let k = 0; k < guessCode.length; k++) {
                if(guessCode[k] === computerCode[k]) {
                    numCorrect++;
                    if(numCorrect === 4) { 
                        alert("You guessed!");
                        throw new Error ("This is not an error. This is just to stop the execution of the nex part of code");
                    }
                } else {
                    // Creates a copy of guessCode with digits correctly guessed removed;
                    splicedGuessCode.push(guessCode[k]); 
                    // Creates a copy of computerCode with digits correctly guessed removed;
                    splicedComputerCode.push(computerCode[k]);
                }
            }
            
            // Code to calculate numbers incorrectly placed and numbers incorrect
            for(let j = 0; j < splicedGuessCode.length; j++) {
                if(splicedComputerCode.includes(splicedGuessCode[j])) {
                    numIncorrectlyPlaced++;

                    let index = splicedComputerCode.indexOf(splicedGuessCode[j]); 
                    splicedComputerCode.splice(index, 1);
                    splicedGuessCode.splice(j, 1);
                    j--; // When one element is removed, the index of the following element decreases by 1
                } else {
                    numIncorrect++;
                }
            }

            function giveFeedback() {
                let blackDot = ".";
                let whiteDot = ",";
                let redX = "X";
                let feedback = document.querySelector(".feedback-span");
                feedback.innerText = `${blackDot.repeat(numCorrect)} ${whiteDot.repeat(numIncorrectlyPlaced)} ${redX.repeat(numIncorrect)}`;
                feedback.classList.remove("feedback-span");
                if(feedback.classList.contains("last") && feedback.innerText !== "....") {
                    alert(`Game over! The code was: ${computerCode}.`);
                }
                return feedback;
            }

            return giveFeedback();
               
               
        
            
            

            

            
            console.log(numCorrect);
            console.log(numIncorrectlyPlaced);
            console.log(numIncorrect);
            console.log(splicedGuessCode);
            console.log(splicedComputerCode);
            console.log(guessCode);
            console.log(computerCode);
        }
    }
});
