// Assignment Code
var generateBtn = document.querySelector("#generate");
// Designates characters that can be pulled from by catagory
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "P",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
];

var spcharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "`",
  "~"
];


function generatePassword() {
  //Blank variables for storing output and pool to use
  var output = "";
  var gensrc = [];
  //Takes user input
  var ucyn = window.confirm("Do you want to include uppercase Letters?");
  var lcyn = window.confirm("Do you want to include lowercase numbers?");
  var nmyn = window.confirm("Do you want to include numbers?");
  var scyn = window.confirm("Do you want to include Special Characters?");
  var length = window.prompt("Enter the number of characters you want in your password (8-124)");
  // Checks if length is within limits and resends prompt if It's not
  if (length <8 || length >128) {
    var length = window.prompt("Enter the number of characters you want in your password (8-124)");
  }
// adds catagorys to random pool depending on user input
  if (ucyn = true) {
  gensrc = gensrc.concat(uppercase);
  } 
  if (lcyn = true) {
  gensrc = gensrc.concat(lowercase);
  }
  if (nmyn = true) {
  gensrc = gensrc.concat(numbers);
  }
  if (scyn = true) {
  gensrc = gensrc.concat(spcharacters);
  }
  // generates password
  for (i=0; i < length; i++) {
    output += gensrc[Math.floor(Math.random() * gensrc.length)]
 
  }
  //returns password to variable usable elswhere
  return output;
}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
