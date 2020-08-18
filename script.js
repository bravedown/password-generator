// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to get a random integer from min to max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


// Function that prompts user for desired character types and password length, then returns a randomly generated password.
function generatePassword() {
  // Prompt the user for the requirements of the password.
  var confirmUpper = confirm("Do you want uppercase letters in the password?");
  var confirmLower = confirm("Do you want lowercase letters in the password?");
  var confirmNumbers = confirm("Do you want numbers in the password?");
  var confirmSpecial = confirm("Do you want special characters in the password?");
  var passwordLength = prompt("How many characters do you want your password to be? 8-129");
  // Convert passwordLength to an integer.
  passwordLength = parseInt(passwordLength);
  // Create the variable that we will append password characters on to later.
  var pw = "";
  // Create an object that contains all the characters for each character type possible for the password.
  var characters = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  }
  // Verify that at least one character type was chosen and the length is at least 8 and no more than 129.
  if ((confirmUpper || confirmLower || confirmNumbers || confirmSpecial) && passwordLength >= 8 && passwordLength <= 129){
    // Create an array to store the chosen character types.
    var charTypes = [];
    // If uppercase letters were chosen...
    if (confirmUpper){
      // Append "upper" to the charTypes array
      charTypes.push("upper");
    }
    // If lowercase letters were chosen...
    if (confirmLower){
      // Append "lower" to the charTypes array
      charTypes.push("lower");
    }
    // If numbers were chosen...
    if (confirmNumbers){
      // Append "numbers" to the charTypes array
      charTypes.push("numbers");
    }
    // If special characters were chosen...
    if (confirmSpecial){
      // Append "special" to the charTypes array
      charTypes.push("special");
    }
    // Execute inside code as many times as passwordLength is long
    for (let i = 0; i < passwordLength; i++){
      // Choose a random character type from charTypes and assign it to the new variable charType
      var charType = charTypes[getRandomInt(0, charTypes.length)];
      // Add a random character from the determined charType to the password
      pw += characters[charType][getRandomInt(0, characters[charType].length)]
    }
    // Return the finished password from the function.
    return pw;
  // If the inputs above were invalid...
  } else {
    // Alert the minimum requirements for a valid password.
    alert("You must select at least one character type and a length from 8-129.")
    // Return the boolean value false
    return false;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // Only change passwordText.value if the inputs of generatePassword() were valid.
  if (password){
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
