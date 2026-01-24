function newGame() {

}

// Generates a 4 digit random code
function generateCode() {
    
    let digit1 = Math.floor(Math.random() * 10);
    let digit2 = Math.floor(Math.random() * 10);
    let digit3 = Math.floor(Math.random() * 10);
    let digit4 = Math.floor(Math.random() * 10);

    let computerCode = [digit1, digit2, digit3, digit4];

    console.log(computerCode);
}




function validateInput() {

}

function checkAnswer() {

}

generateCode();