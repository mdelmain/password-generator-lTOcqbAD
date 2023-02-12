// get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write password to the #password input
function writePassword() {
  // get password length
  var passwordLength = prompt("What is the length of your password?");
  if (isNaN(+passwordLength)){
    alert("Password length must be an integer!");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128){
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  // asking user input for password criteria
  var useLowerCase = confirm("Use lowercase letters?");
  var useUpperCase = confirm("Use uppercase letters?");
  var useNumeric = confirm("Include numbers?");
  var useSpecialCharacters = confirm("Include special characters?");
  if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecialCharacters) {
    alert("At least one password type must be selected!");
    return;
  }

  // calls generate password function and generates password
  var password = generatePassword(passwordLength, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters);

  // pushes password to html page
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function to generate a password
function generatePassword(passwordLength, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters) {
  // builds a set of random characters based on function inputs
  var randomCharacters = "";
  if (useLowerCase){
    randomCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUpperCase){
    randomCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useNumeric){
    randomCharacters += "1234567890";
  }
  if (useSpecialCharacters) {
    randomCharacters += "!@#$%^&*()+=.,-_~";
  }

  // builds password one character at a time
  var passwordresult = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordresult +=
      randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
  }

  return passwordresult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
