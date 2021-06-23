// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbols = [".","\\", ":", ";"];
console.log(symbols); 
var str = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = str.split(""); // the argument is a null string, "".
var alphaUpperArray = str.toUpperCase().split("");
var alphaUpperArray = str.toLowerCase().split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
