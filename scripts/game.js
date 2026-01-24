function newGame() {

}

/*  Generates a 4 digit random code:
Initially I wanted the function to return and array, but it returned an object,
it seems you cannot return an array in JavaScript, so I modified the function to return
the code as a string */
function generateCode() {
    
    let digit1 = generateDigit();
    let digit2 = generateDigit();
    let digit3 = generateDigit();
    let digit4 = generateDigit();

    let computerCode = `${digit1}${digit2}${digit3}${digit4}`;

    return computerCode;
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

