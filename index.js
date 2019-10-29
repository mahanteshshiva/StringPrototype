
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
//with function

var x = "Hello mahantesh welcome  my world";
console.log(x.includes("to"));
// finding worlds in sentence returns true or false

var x = " cnslkcd dcjkdlc 'cnclnc' cdjclkj cnclnc"
console.log(x.indexOf("cnclnc"));
// indexOf

var x = "cnclnc cnslkcd dcjkdlc cdjclkj 'cnclnc'";
console.log(x.lastIndexOf("cnclnc"));
// lastindexOf

var x = "facebook gmail whatsapp linkedIn yahoo"
console.log(x.replace('yahoo','twitter'));
// replace a world 

function toReplace(x){
    console.log("replacing yahoo with twitter " + x.replace('yahoo','twitter'));
}
toReplace("facebook gmail whatsapp linkedIn yahoo")
// replace with function

var x = 'Hello world';
console.log(x.slice(6,9));
// slice

function toFindSlice(x){
    console.log("slice method with function " + x.slice(6,9));
}
toFindSlice("hello world")
// with function

var x = "facebook gmail whatsapp linkedIn yahoo";
console.log(x.search("whatsapp"));

var x = "facebook gmail whatsapp linkedIn yahoo"
console.log(x.toUpperCase());

var x = "facebook gmail whatsapp linkedIn yahoo"
console.log(x.substring(4,6));