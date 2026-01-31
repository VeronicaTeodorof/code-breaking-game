let playButton = document.getElementById("play-button");
playButton.addEventListener("click", changeButton);
playButton.addEventListener("click", enterCodeMessage);
playButton.addEventListener("click", cursorReady);


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
};

generateCode();
// Generates a random digit
function generateDigit() {
    let digit = Math.floor(Math.random() * 10);
    return digit;
}

function checkAnswer() {

   

}

checkAnswer();

