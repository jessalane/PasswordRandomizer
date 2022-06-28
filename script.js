// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// brings up the criteria when you click the generate button
var generate = document.getElementById('generate');
generate.onclick = function() {
  document.getElementById('selectorPopup').style.visibility = 'visible';
}

// reads the criteria submitted by the user to include in password
var generate2 = document.getElementById('start');
generate2.onclick = function() {
  document.getElementById('selectorPopup').style.visibility = 'hidden';

  // checks the password lenght
  let passLength = document.getElementById('length').value;

  // denotes to include losercase letters
  if (document.getElementById('lower').checked) {
    console.log("user wants lowercase letters");
  } 
  
  // denotes to include uppercase letters
  if (document.getElementById('upper').checked) {
    console.log("user wants uppercase letters");
  }

  //denotes to include special characters
  if (document.getElementById('special').checked) {
    console.log("user wants special characters");
  } 
  
  // denotes to include numerals
  if (document.getElementById('numbers').checked) {
    console.log("user wants numeric characters");
  } 
  
  // denotes the lenght the password should be
  if (passLength >= 8) {
    console.log("user wants a password " + passLength + " long")
  }
}
