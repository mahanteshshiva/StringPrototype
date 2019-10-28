
var x = "safe and secure payments"
console.log("length of the string is " + x.length);
//  returns length of the string 

function toFindStringLength(name){
    console.log("string length is " + name.length);
}
toFindStringLength("mahantesh")
// with function

var x = "Hello world"
console.log("character at index 4 is " + " " + x.charAt(6));
// returns the character  

function toFindCharacter(x){
    console.log(x.charAt(4));
}
toFindCharacter("helloworld");
// with function

var x = "Hello world";
console.log("character code at 3 is " + x.charCodeAt(3));
//returns the character code 

function toFindCharacterCode(x){
    console.log("function with character code " + x.charCodeAt(5));
}
toFindCharacterCode("helloworld")
// with function 

var x = "$%(&";
console.log("character point at 3 " + x.codePointAt(3));
// character code point 

function toFindCodePoint(x){
    console.log("code point at 5 is " + x.codePointAt(5));
}
toFindCodePoint("#$%^&*")
//with function

var x = "Hello";
var y= "world";
console.log("combining two string "  + x.concat(" " , y));
// concat method

function addingString(x,y){
console.log(x.concat() + " " + y);
}
addingString("hello","world")

var x = "Hello mahantesh welcome  my world";
console.log(x.includes("to"));

var x = " cnslkcd dcjkdlc 'cnclnc' cdjclkj cnclnc"
console.log(x.indexOf("cnclnc"));
// indexOf

var x = "cnclnc cnslkcd dcjkdlc cdjclkj 'cnclnc'";
console.log(x.lastIndexOf("cnclnc"));
// lastindexOf

