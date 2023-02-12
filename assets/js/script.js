// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("What is the length of your password?");
  if (passwordLength < 8 || passwordLength > 128){
    alert("Password length must be between 8 and 128 characters.")
    return;
  }
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(passwordLength) {
  console.log({passwordLength});
  var randomLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var passwordresult = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordresult +=
      randomLetters[Math.floor(Math.random() * randomLetters.length)];
      console.log(passwordresult);
  }

  console.log(passwordresult);
  return passwordresult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
