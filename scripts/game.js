function newGame() {
    generateCode();
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

/* Write a function that modifies the content of the html page
after the computer code is generated.
The function should: 
- change the text of play button to quit;
- remove heading1;
- add heading2;
- add message: "Enter code here:"
 */

function changeHtml() {

}

function changePlayToQuit() {

}

function removeH1() {

}

function addH2() {

}

function displayEnterCode() {

}



function validateInput() {

}

function checkAnswer() {

}

