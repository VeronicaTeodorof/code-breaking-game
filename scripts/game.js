function newGame() {

}

// Generates a 4 digit random code
function generateCode() {
    
    let digit1 = generateDigit();
    let digit2 = generateDigit();
    let digit3 = generateDigit();
    let digit4 = generateDigit();

    let computerCode = [digit1, digit2, digit3, digit4];

    console.log(computerCode);
}
// Generates a random digit
function generateDigit() {
    let digit = Math.floor(Math.random() * 10);
    return digit;
}




function validateInput() {

}

function checkAnswer() {

}

generateCode();