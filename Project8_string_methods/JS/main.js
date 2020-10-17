function myFunction1() {  //Concatenates part1-5 into a string
   var part1 = "There";   //Declaring strings and variables
   var part2 = "was a ";
   var part3 = "frog";
   var part4 = " in a ";
   var part5 = "pond.";
   var sentence = part1.concat(part2, part3, part4, part5);
   document.getElementById("Concatenate").innerHTML = sentence;//Outputs all strings into 1 string
   var capssentence = sentence.toUpperCase(); //Modifier for all caps
   document.getElementById("Caps").innerHTML = capssentence; //Makes output all Capital letters
}

function sliceMethod() { //Slices out character 5-23 out of the string
   var Sentence1 = "Marry had a little lamb. Who's fleece was white as snow.";
   var Section1 = Sentence1.slice(5, 23); 
   document.getElementById("Slice").innerHTML = Section1; //Output to html doc
}

function stringMethod() { //Turns a number into a string
   var Y = 12; 
   document.getElementById("numberString").innerHTML = Y.toString();//Sends output to html doc

}

function precisionMethod() { //Limits a floating number to a specified number of digits
   var A = 378.3248725; 
   document.getElementById("Precise").innerHTML = A.toPrecision(6);//Rounds the floating number to its specified 6th digit.
}

var num = 214.356789; //Declared a floating number to show fixed operator

function Functionfixed() {
   document.getElementById("Fixed").innerHTML = num.toFixed(4); //outputs var num at a fixed rate of 4 decimal places
}

var str2 = "The weather is lovely this time of year." //String declared for myFunction4

function myFunction4() {
   document.getElementById("Value").innerHTML= str2.valueOf();//Outputs the value of str2 to the html doc
}