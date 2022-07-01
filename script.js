// variables
var lowerChar =  "abcdefghijklmnopqrstuvwxyz";
var upperChar =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "(<[{?!.*&%#$@;:,/~^+=-_}]>)";
var numeralChar = "0123456789";
var passCharacters = "";
var password = "";

// brings up the criteria when you click the generate button
var generate = document.getElementById('generate');
generate.onclick = function() {
  document.getElementById('selectorPopup').style.visibility = 'visible';
}

// reads the criteria submitted by the user to include in password
var generate2 = document.getElementById('start');
generate2.onclick = function() {
  var passLength = document.getElementById('length').value;
  var passwordText = document.querySelector("#password");
  var checkedLength = document.querySelectorAll('input[type="checkbox"]:checked').length;

  if (passLength >= 8 && passLength < 128) {

    document.getElementById('selectorPopup').style.visibility = 'hidden';

    // denotes to include losercase letters
    if (document.getElementById('lower').checked) {
      passCharacters += lowerChar;

      password += lowerChar[Math.floor(Math.random() * lowerChar.length)];

    } 
    
    // denotes to include uppercase letters
    if (document.getElementById('upper').checked) {
      passCharacters += upperChar;

      password += upperChar[Math.floor(Math.random() * upperChar.length)];
    }

    //denotes to include special characters
    if (document.getElementById('special').checked) {
      passCharacters += specialChar;

      password += specialChar[Math.floor(Math.random() * specialChar.length)];
    } 
    
    // denotes to include numerals
    if (document.getElementById('numbers').checked) {
      passCharacters += numeralChar;

      password += numeralChar[Math.floor(Math.random() * numeralChar.length)];
    } 

    // randomizing password and sending it to textarea
    for (var i = 0; i < passLength - checkedLength; i++) {
    
      password += passCharacters.charAt(Math.floor(Math.random() * passCharacters.length));

      passwordText.value = password;
    }

    document.getElementById('error').style.visibility = 'hidden';

  } else { 
    document.getElementById('error').style.visibility = 'visible';
  }
}
