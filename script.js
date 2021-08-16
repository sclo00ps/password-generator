// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbols = [".","\\", ":", ";"];
console.log(symbols); 
var str = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = str.split(""); // the argument is a null string, "".
var alphaUpperArray = str.toUpperCase().split("");
var alphaUpperArray = str.toLowerCase().split("");
var specialCharacters = ["!", "@", "#", "$", "%", "(", ")", "_", "*", "&","^", "+", "-", "/", "=", "/", "[", ",", "{", "}", "]", "//", " .", "\\", "'", "<>"];      
var alphaLowerArray= ["a", "b", "c", "d", "e", "f", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Confirm statements for password length
var pwLength = window.prompt("Your password length should be 8 - 128 characters long, what length do you want your password to be?"); 

// Confirm statements for password character types
var specChar = confirm("Do you want to include special characters...?@[\]^_?"); 
var  lowCase = confirm("Do you want to include lower case characters?"); 
var  uppCase = confirm("Do you want to include upper case characters?"); 
var  numCase = confirm("Do you want to include numeric characters?"); 


if (specChar===false && lowCase===false && uppCase===false && numCase ===false) {
  alert ("Please include at least one of each type of character choice in your password")
  return;
  }




// var txt;
// var r = confirm("Press a button!");
// if (r == true) {
//   txt = "You pressed OK!";
// } else {
//   txt = "You pressed Cancel!";
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
