// Homework Oct 19, 2013 (Javascript)

doStuff(); // Calls a function 

doStuff() // Also calls function, JS doesn't enforce ; use

///////////////////////////////////
// 1. Numbers, Strings and Operators

3; // 3
1.5;  // 1.5

1 + 1; // 2
8 - 1;  // 7
10 * 2; // 20
35 / 5; // 7

5 / 2; // 2.5

(1 + 3) * 2; // 8

true; // true
false; // false

'abc'; // returns the string "abc"
"Hello, world"; "Hello, world"

!true; // false (not true)
!false; // true (not false)

1 == 1; // true
2 == 1; // false

1 != 1; // false
2 != 1; // true

1 < 10; // true
1 > 10; // false
2 <= 2; // true
2 >= 2; // true

"Hello " + "world!"; // "Hello world!"

"a" < "b"; // true, converted to numeric codes and compared

"5" == 5; // true

"5" === 5; // false

"This is a string".charAt(0);  // "T"

null; // null
undefined; // undefined
// not yet defined or empty

///////////////////////////////////
// 2. Variables, Arrays and Objects

var someVar = 5; // declares a variable someVar, set value to 5
// if you use var, local scope
// if you just assign value, it will be created as global scope

someOtherVar = 10;
   	// declares a variable someOtherVar, sets value to 10

var someThirdVar;
	// declares a variable someThirdVar with no value

someVar += 5; // Adds 5 to someVar, result is 10
someVar *= 10; // Multiplies someVar by 10, result is 100

someVar++; // ++someVar increments someVar by 1, result is 101 
           // in console, returns old value even though it incremented
someVar--; // --someVar decrements someVar by 1, result is 100 again  

var myArray = ["Hello", 45, true];
  // Declares array called myArray, populates with 3 elements:
  // the string "Hello", the number 45, and a Boolean valued true

myArray[1]; // 45

myArray.push("World"); 
	/* returns 4, the # of elements in the array
	after adding the "World" string as the fourth element */
	
myArray.length; // returns 4, the # of elements in the array

var myObj = {key1: "Hello", key2: "World"};
/* declares object named myObj with two keys (properties):
key 1 is the string "Hello"
key 2 is the string "World" */

var myObj = {myKey: "myValue", "my other key": 4};

/* Re-declares the object myObj with two attributes:
myKey is set to the string "myValue"
"my other key" is set to the number 4.
The old myObj with key1 and key2 is gone.
*/

myObj["my other key"]; // 4

myObj.myKey; // "myValue", using dot notation

myObj.myThirdKey = true;
/* sets a 3rd attributed in the object myObj
named myThirdKey to true */

myObj.myFourthKey;  /* does nothing, or boolean false 
					because we didn't set this to anything */

///////////////////////////////////
// 3. Logic and Control Structures

var count = 1;
if (count == 3){
} else if (count == 4) {
} else {
}

/*
Nothing happens because count is 1, not 3 or 4
*/

while (true) {
}
// infinite loop, I'm not even going to try this one :)

var input
do {
    input = getInput();
} while (!isValid(input))
// this does not work because getInput is not defined
// I think it was supposed to get input until valid input entered

for (var i = 0; i < 5; i++){
}
// loops 5 times, with i going from 0 to 4

if (house.size == "big" && house.colour == "blue"){
    house.contains = "bear";
}
if (colour == "red" || colour == "blue"){
}

/*
If the house size is big and the house color is blue,
sets contains attribute in house object to bear.
Does nothing if house color is red or 
if house color is blue and size is not big).
*/

var name = otherName || "default";
/* 
This does not work because otherName does not exist.
If otherName is declared before this, then this statement
sets name as follows:
	If otherName is not empty string, name = value of otherName
	If otherName is empty string, name = "default"
*/

///////////////////////////////////
// 4. Functions, Scope and Closures

function myFunction(thing){
    return thing.toUpperCase();
}
//capitalizes any string 

myFunction("foo"); 
// = "FOO"

function myFunction(){
}
// creates a function named myFunction that does nothing

setTimeout(myFunction, 5000);
// waits 5 secs, then calls myFunction

setTimeout(function(){
}, 5000);
// does nothing, after waiting 5 secs

if (true){
    var i = 5;
}
// sets variable i to 5

i; 
// displays value of i which is 5

(function(){
    var temporary = 5;
    window.permanent = 10;
})();
temporary; 
permanent; 
/*
Has syntax errors with function definition, including no name on function
Should be --> function test() {}
Once syntax fixed, running this chunk of code yields a reference error
because temporary is not defined.
The "permanent" attribute's value is 10 because that object 
seems to have a global scope, while temporary only lives inside function
*/

function sayHelloInFiveSeconds(name){
    var prompt = "Hello, " + name + "!";
    function inner(){
        alert(prompt);
    }
    setTimeout(inner, 5000);

}
sayHelloInFiveSeconds("Adam"); 
/*
Creates a function named sayHelloInFiveSeconds with parameter name
This function has a nested function named inner that displays an alert
window. inner is called with a 5 second delay using setTimeout.
The sayHelloInFiveSeconds function is called with parameter "Adam"
and it waits 5 seconds and then pops up the aler as it should.
*/

///////////////////////////////////
// 5. More about Objects; Constructors and Prototypes

var myObj = {
    myFunc: function(){
        return "Hello world!";
    }
};
myObj.myFunc(); 
/* 
Creates an object with a method/function called myFunc
which returns "Hello World"
myObj.myFunc() triggers the function and "Hello world"
is displayed 
*/


myObj = {
    myString: "Hello world!",
    myFunc: function(){
        return this.myString;
    }
};
myObj.myFunc(); 
/*
Same end results as above (displays "Hello world!")
but in this case the "Hello world!" is saved in
a property of myObj called myString.
"this" is used to mean this instance of myObj vs. others.
*/

var myFunc = myObj.myFunc; 
myFunc(); 
/*
Creates myFunc variable, sets it to value from myObj object property
Calls myFunc() function which is different than the variable I think
*/

var myOtherFunc = function(){
    return this.myString.toUpperCase();
}
myObj.myOtherFunc = myOtherFunc;
myObj.myOtherFunc(); 
/*
Returns the string in myObj.myString all in caps "HELLO WORLD"
Creates a function called myOtherFunc that capitalizes everything
Then makes this function a method of the myObj class
*/

var MyConstructor = function(){
    this.myNumber = 5;
}
myNewObj = new MyConstructor(); 
myNewObj.myNumber; 
/*
Defines the constructor function for a class called MyConstructor
   which sets the myNumber property to 5 in each object 
Instatiates an object in this class called myNewObj
Output displayed is 5, the value of myNewObj.myNumber
*/

var myObj = {
    myString: "Hello world!",
};
var myPrototype = {
    meaningOfLife: 42,
    myFunc: function(){
        return this.myString.toLowerCase()
    }
};
myObj.__proto__ = myPrototype;
myObj.meaningOfLife;
myObj.myFunc(); 
/*
Creates a class called myPrototype
Set that to the prototype class for myObj
myObj inherits properties and methods of myPrototype
Thus myObj has a property called meaningOfLife = 42
and a method called myFunc 
Results are that the meaningOfLife prop is set to 42
and that the method myFunc puts out myString in lower case
but it does not change the myString, just displays it in lower case
*/


myPrototype.__proto__ = {
    myBoolean: true
};
myObj.myBoolean; 
/*
Sets the prototype of class myPrototype to a class with a
property named myBoolean which is set to true by default.
Both myPrototype and myObj inherit this property and 
thus myObj.myBoolean is true
*/

myPrototype.meaningOfLife = 43;
myObj.meaningOfLife; 
/*
Resets meaningofLife property to 43 for myPrototype class
and all children of it, including myObj
*/

var myObj = Object.create(myPrototype);
myObj.meaningOfLife; 
/*
Creates a new object called myObj of class myPrototype
and thus the new object's meaningOfLife prop is 43
*/

MyConstructor.prototype = {
    myNumber: 5,
    getMyNumber: function(){
        return this.myNumber;
    }
};
var myNewObj2 = new MyConstructor();
myNewObj2.getMyNumber();
myNewObj2.myNumber = 6
myNewObj2.getMyNumber(); 
/*
Uses prototype keyword to set a property and function that 
are shared accross all instances of the myConstructor class
(not copied but referenced by).
The first call to getMyNumber prints a 5
The second call prints a 6
Note that the line var myConstructor = function() {this.myNumber = 5};
had to be added before this to run on console because otherwise
there is no MyConstructor constructor in existence
*/

var myNumber = 12;
var myNumberObj = new Number(12);
myNumber == myNumberObj;
/*
creates a variable called myNumber, sets it to 12
creates another instance of the variable named myNumberObj
They both contain the value 12 so the == yields true
*/

typeof(myNumber); // returns number, the type
typeof(myNumberObj); // returns object, the type 
myNumber === myNumberObj; 
	// returns false because these two items are not identical 
if (0){

}
// nothing happens because the value of (0) is false
if (Number(0)){

}
// also nothing happens because value of Number(0) is 0
// which is treated as false

String.prototype.firstCharacter = function(){
    return this.charAt(0);
}
"abc".firstCharacter(); 
/* 
Adds a prototype method to all strings that returns 
first character which is at position 0.
When evoked for "abc" this returns an a
*/


if (Object.create === undefined){ 
    Object.create = function(proto){
        var Constructor = function(){};
        Constructor.prototype = proto;
        return new Constructor();
    }
}
/*
If there is no create function (constructor) for the class object,
it creates a create function which is an instance of the 
Constructor function 
Don't exactly understand the proto parameter passed in...
*/