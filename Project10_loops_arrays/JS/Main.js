function Call_Loop() { //Declares loop function 
   var Digit = ""; //Declares empty var for keeping count of total values produced
   var X = 1; //declares base value of X
   while (X < 11) {
      Digit += "<br>" + X; //outputs the Digit and a return 
      X++; //Increments X everytime the loop is ran
   }
   document.getElementById("Counting_to_Ten").innerHTML = Digit; //Sends results to html doc
}

function mystrFunction() { //Declares string function to count the length
   var str1 = "The thousand injuries of Fortunato I had borne as I best could, but when he ventured upon insult I vowed revenge.";//declares string
   var X = str1.length;  //Determines length of string 
   document.getElementById("String").innerHTML = X;//Sends results to html doc
}

var Sweets = ["Chocolate", "Caramel", "Nougat", "Peanuts", "Toffee"];//declares string 
var Content = ""; //Provides a var to send results to 
var R; //Declares a variable for keeping count of total values produced
function for_Loop() { //Declares function to list string values
   for (R = 0; R < Sweets.length; R++) {  //For everytime R is less than sweets length increment R by 1
      Content += Sweets[R] + "<br>"; //Output for each iteration
   }
   document.getElementById("List_of_Sweets").innerHTML = Content;//Sends results to html doc
}


function scenery() { //Declares function scenery
   scenery[1] = "Ocean"; //Declares an array value at index 0
   scenery[2] = "Forest"; //Declares an array value at index 1
   scenery[3] = "Sky";//Declares an array value at index 2
   scenery[4] = "Beach";//Declares an array value at index 3
   scenery[5] = "River";//Declares an array value at index 4
   document.getElementById("Array").innerHTML = "In this picture, it shows a scenic view of the " + scenery[3] +"."; //Output to the element with the ID Array in the html doc
}


const Color = "Tan";// Declaring a constant


function constant_function() {
   constant_function[1] = ["Red"];
   constant_function[2] = ["Blue"];
   constant_function[3] = [ "Green"];
   constant_function[4] = ["Yellow"];
   constant_function[5] = ["Black"];
   constant_function[2] = ["Dark Blue"];
   constant_function[6] = [constant_function[1] +" "+ constant_function[3]];



   document.getElementById("Constant").innerHTML = "Picking a background color is important. Here's an example shade you may like " + constant_function[2] + " or maybe " + Color + " or perhaps a mix of colors like " + constant_function[6] ,".";
}

var T = 69; //delcared globally 

function myFunction1() {
   let T = 63; //declared in a limited scope
   document.getElementById("Let").innerHTML = T;  //Output is 63 because it was last declared and within the scope of let 
}

//         function myFunction7() {
  //       return Math.PI;
    //     }
      //   document.getElementById("Pie").innerHTML = myFunction7(); 
      //getting an error back on this code 



function myFunction3(){
let drink = {
   base: "Mocha",
   topping: "Caramel",
   style: "Iced",
   roast: "Medium",
   description : myFunction3() {

      return "The drink is a " + this.style + this.topping + this.base + "Coffee.";
   }
};
document.getElementById("Coffee").innerHTML = drink.description(); 