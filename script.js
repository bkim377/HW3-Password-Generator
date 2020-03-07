// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword(){
  // Prompt the user for password length.
  passLength = prompt("How many characters will your password be?");
  // Check to see if the user actually entered a length.
  if(passLength >= 8 && passLength <= 128) {
    alert("Your password will be " + passLength + " characters long.");
  } else {
    alert("Please enter a number between 8 and 128 for the password length.");
    
  }

  // 4 Confirms
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var passArray = [];

  // 1) Special Characters
  specialConfirm = confirm("Do you want to use special characters? (e.g. !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

  // 2) Numbers 
  numbersConfirm = confirm("Do you want to use numbers?");

  // 3) Lowercase
  lowerCaseConfirm = confirm("Do you want to use lowercase letters?");

  // 4) Uppercase
  upperCaseConfirm = confirm("Do you want to use uppercase letters?");

  // Generate password, based on user specifications.


  // NOTE: User specifications come from confirms.
  // 
  for(var i = 0; i <= 10; i++){

  }
  return "Something";
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
