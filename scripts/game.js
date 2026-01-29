let playButton = document.getElementById("play-button");
playButton.addEventListener("click", changeButton);
playButton.addEventListener("click", enterCodeMessage);

// Change the text of the play button
function changeButton() {
    playButton.innerText = "Quit";
};

function enterCodeMessage() {
    messageEnterCode = document.getElementById("message");
    messageEnterCode.innerHTML = "<h2>Enter code here:</h2>";
};





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


function validateInput() {

}

function checkAnswer() {

}

