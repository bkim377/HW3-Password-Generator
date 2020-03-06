// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword(){
  // Prompt the user for password length.
  // Check to see if the user actually entered a length.
  // 4 Confirms
  // 1) Special Characters
  // 2) Numbers 
  // 3) Lowercase
  // 4) Uppercase
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
