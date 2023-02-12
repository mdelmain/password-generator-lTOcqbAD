// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("What is the length of your password?");
  if (passwordLength < 8 || passwordLength > 128){
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
  var useLowerCase = confirm("Use lowercase letters?");
  var useUpperCase = confirm("Use uppercase letters?");
  var useNumeric = confirm("Include numbers?");
  var useSpecialCharacters = confirm("Include special characters?");
  var password = generatePassword(passwordLength, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(passwordLength, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters) {
  console.log({passwordLength});
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "1234567890";
  var specialCharacters = "!@#$%^&*()+=.,-_~";
  var randomCharacters = "";
  if (useLowerCase){
    randomCharacters += lowerCase;
  }
  if (useUpperCase){
    randomCharacters += upperCase;
  }
  if (useNumeric){
    randomCharacters += numeric;
  }
  if (useSpecialCharacters) {
    randomCharacters += specialCharacters;
  }
  var passwordresult = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordresult +=
      randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
      console.log(passwordresult);
  }

  console.log(passwordresult);
  return passwordresult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
