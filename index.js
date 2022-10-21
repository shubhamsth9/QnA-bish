const readline = require("readline-sync");

// EX 01-04
const userName = readline.question("Aapka kya naam hai? \nHumse kya kaam hai? \n");

let userNameArray = userName.split(" ");

console.log("KBC mein aapka swagat hai " + userNameArray[0] +
 "! \nTanay Bhaiya jald hi aapko " + userNameArray[4] + " sikha denge :D");
