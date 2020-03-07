// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword() {

  // ********** SECTION 1: ASKING THE USER FOR THE PASSWORD LENGTH **********
  // Prompt the user for password length.
  passLength = prompt("How many characters will your password be? (8-128 characters allowed)");

  // Check to see if the user actually entered a length.
  // *** IMPORTANT NOTE: If the user enters a non-number for the prompt, the whole program will still execute properly, 
  // but the final output is an empty output.
  while(passLength < 8 || passLength > 128) {
    alert("Please enter a number between 8 and 128 for the password length.");
    passLength = prompt("How many characters will your password be? (8-128 characters allowed)");
  }

  alert("Your password will be " + passLength + " characters long.");


  // ********** SECTION 2: CONFIRMING WHAT CHARACTERS TO USE IN THE PASSWORD **********
  // 4 Confirms

  // These are the strings of all the possible characters the password can contain.  
  // These strings were taken from <https://webdevtrick.com/javascript-random-password-generator/>, but I came up with the variable names and rest of the function myself.
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numbers = "0123456789";
  specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var passArray = "";

  // This part confirms the user's criteria and joins all the selected characters together in one string.
  // *** IMPORTANT NOTE: If the user says NO to all of the prompts, then the final output will be ["undefined" repeated "passLength" number of times].
  // 1) Special Characters
  specialConfirm = confirm("Do you want to use special characters? (e.g. !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  if (specialConfirm == true) {
    passArray = passArray.concat(specialChars);
  }
  // 2) Numbers 
  numbersConfirm = confirm("Do you want to use numbers?");
  if (numbersConfirm == true) {
    passArray = passArray.concat(numbers);
  } 
  // 3) Lowercase
  lowerCaseConfirm = confirm("Do you want to use lowercase letters?");
  if (lowerCaseConfirm == true) {
    passArray = passArray.concat(lowerCase);
  }
  // 4) Uppercase
  upperCaseConfirm = confirm("Do you want to use uppercase letters?");
  if (upperCaseConfirm == true) {
    passArray = passArray.concat(upperCase);
  }


  // ********** SECTION 3: GENERATING THE PASSWORD WITH THE SPECIFIED CHARACTER SETS **********
  // Generate password, based on user specifications.
  // NOTE: User specifications come from confirms.
  finalPass = "";
  for(var i = 0; i < passLength; i++) {
    var randomPass = passArray[Math.floor(Math.random()*passArray.length)];
    finalPass = finalPass.concat(randomPass);
  }
  return finalPass;
};


// ********** SECTION 4: PRINTING THE PASSWORD ON THE SCREEN **********
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
