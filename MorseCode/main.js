
const morseCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  "\"": ".-..-.",
  "$": "...-..-",
  "@": ".--.-.",
  " ": " " 
};


let input=document.getElementById("text");
let code=document.getElementById("code");
let copy=document.getElementById("copy");

function convertToMorse(text){
    let morse="";
    for(let elm of text){
        if(morseCode[elm]) morse += " "+morseCode[elm];
    }
    return morse;
} 

input.addEventListener("input",function(){
   let text=input.value.toUpperCase();
   code.value=convertToMorse(text);
});


copy.addEventListener("click", function() {
    code.select();
    code.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(code.value)
        .then(function() {
            alert("Morse code copied!");})
        .catch(function(err) {
            alert("Failed to copy: "+err);
        });
});