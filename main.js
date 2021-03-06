var textAreaEl = document.getElementById("password");
var btnGenerate = document.getElementById("generate");
var btnCopy = document.getElementById("copy");

// An array of the 4 different password options (special, numeric, lowercase, uppercase)
var charactersArr = ["' '!\"#$%&()*+,-./:;<=>?@\\[]^_\`{|}~", "0123456789", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// Variables for each possible combination of selections
var all = charactersArr[0] + charactersArr[1] + charactersArr[2] + charactersArr[3];
var specialNumericLower = charactersArr[0] + charactersArr[1] + charactersArr[2];
var specialNumericUpper = charactersArr[0] + charactersArr[1] + charactersArr[3];
var specialLowerUpper = charactersArr[0] + charactersArr[2] + charactersArr[3];
var specialLower = charactersArr[0] + charactersArr[2];
var specialUpper = charactersArr[0] + charactersArr[3];
var specialNumeric = charactersArr[0] + charactersArr[1];
var numericLowerUpper = charactersArr[1] + charactersArr[2] + charactersArr[3];
var numericUpper = charactersArr[1] + charactersArr[3];
var numericLower = charactersArr[1] + charactersArr[2];
var lowerUpper = charactersArr[2] + charactersArr[3];
var special = charactersArr[0];
var numeric = charactersArr[1];
var lower = charactersArr[2];
var upper = charactersArr[3];

btnGenerate.addEventListener("click", function (e) {

    var generatedPassword = "";

    // When the button is clicked the prompt is run
    var characterCount = prompt("Choose a password length between 8 and 128 characters");

    // The below conditions ensure valid inputs into the prompt
    if (isNaN(characterCount) === true) {
        alert("You did not enter a number");
    }
    else if ((characterCount < 8) || (characterCount > 128)) {
        alert("The number you enter must be between 8 and 128");
    }
    // If the input is valid continue with the confirms
    else {
        var specialCharacters = confirm("Do you want the password to include special characters?");
        var numericCharacters = confirm("Do you want the password to include numeric characters?");
        var lowercaseCharacters = confirm("Do you want the password to include lowercase characters?");
        var uppercaseCharacters = confirm("Do you want the password to include uppercase characters?");
    }
    // Ensures at least one character type is selected
    if (specialCharacters === false && numericCharacters === false && lowercaseCharacters === false && uppercaseCharacters === false) {
        alert("You must select at least one character type");
    }
    // Determines characters based on confirm selections
    else if (specialCharacters && numericCharacters && lowercaseCharacters && uppercaseCharacters) {
        // Loops through the relevant string and selects a random value as many times as required by the character count
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += all.charAt(Math.floor(Math.random() * all.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (specialCharacters && numericCharacters && lowercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += specialNumericLower.charAt(Math.floor(Math.random() * specialNumericLower.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (specialCharacters && numericCharacters && uppercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += specialNumericUpper.charAt(Math.floor(Math.random() * specialNumericUpper.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (specialCharacters && lowercaseCharacters && uppercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += specialLowerUpper.charAt(Math.floor(Math.random() * specialLowerUpper.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (specialCharacters && lowercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += specialLower.charAt(Math.floor(Math.random() * specialLower.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (specialCharacters && uppercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += specialUpper.charAt(Math.floor(Math.random() * specialUpper.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (specialCharacters && numericCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += specialNumeric.charAt(Math.floor(Math.random() * specialNumeric.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (numericCharacters && lowercaseCharacters && uppercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += numericLowerUpper.charAt(Math.floor(Math.random() * numericLowerUpper.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (numericCharacters && uppercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += numericUpper.charAt(Math.floor(Math.random() * numericUpper.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (numericCharacters && lowercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += numericLower.charAt(Math.floor(Math.random() * numericLower.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (lowercaseCharacters && uppercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += lowerUpper.charAt(Math.floor(Math.random() * lowerUpper.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (specialCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += special.charAt(Math.floor(Math.random() * special.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (numericCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += numeric.charAt(Math.floor(Math.random() * numeric.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (lowercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += lower.charAt(Math.floor(Math.random() * lower.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
    else if (uppercaseCharacters) {
        for (var i = 0; i < characterCount; i++) {
            generatedPassword += upper.charAt(Math.floor(Math.random() * upper.length));
        }
        textAreaEl.textContent = generatedPassword;
    }
})

btnCopy.addEventListener("click", function (e) {
    textAreaEl.select();
    document.execCommand("copy");
})