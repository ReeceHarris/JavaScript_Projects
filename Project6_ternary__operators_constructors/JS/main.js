function Vote_Function() {    //Declaring Vote_Function 
   var Age, Can_vote;         //Declared 2 var for Vote Function
   Age = document.getElementById("Age").value; //Method for sending input from html doc
   Can_vote = (Age < 18) ? "You are not old enough":"You are old enough"; //Output based on recieved data
   document.getElementById("vote").innerHTML = Can_vote + " to vote."; //Output sent to html doc
}

function Vehicle(Make, Model, Year, Color) {    //Creating dictionary name "Vehicle"
   this.Vehicle_Make = Make;                    //Creating traits   
   this.Vehicle_Model = Model;                  //Creating traits 
   this.Vehicle_Year = Year;                    //Creating traits 
   this.Vehicle_Color = Color;                  //Creating traits 
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //Adding new string into dictionary Vehicle
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); 
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //Adding new string into dictionary Vehicle
function myFunction() {  //myFunction to dispay string from dictionary based on key word given
   document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color +"-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;

}

 


function count_Function() { //Declaring count_Function
   document.getElementById("Nested_Function").innerHTML = Count(); //Method for sending output to html doc
   function Count() {  //Declaring Count as a nested sub function
      var Starting_point = 9; //Declaring base var named Starting_point and initial value
      function Plus_one() {Starting_point += 1;} 
      Plus_one();
      return Starting_point;  //Output
   }
}