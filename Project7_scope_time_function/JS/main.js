var R = 5;  //R is declared as a global variable able to be used in all functions in the program

function Add_numbers_1() { //Function 1 output is 20 
  
   console.log(15+R); //Displays output in the console  
}
function Add_numbers_2() {
 var X = 5;  //X is a local variable only defined in this function 
   console.log(X+100); 
}
Add_numbers_1(); // Output is 20
Add_numbers_2(); //Output is 105


function myFunction1() {   //Simple function that will say good day if between 0-9pm
   if (new Date().getHours() < 21) {
      document.getElementById("Greetings").innerHTML="Good day.";//Output to html doc
   }
}

function myFunction2() {  //Greeting of the day function
   if (new Date().getHours() < 11 ) {
      document.getElementById("Greeting_of_the_Day").innerHTML="Good Morning."
   } //Output if hour recieved is below value 11

   if (new Date().getHours() < 17 ) {
      document.getElementById("Greeting_of_the_Day").innerHTML="Good Afternoon.";
   } //Output if value received is less that 17

   if (new Date().getHours() > 17 ) {
      document.getElementById("Greeting_of_the_Day").innerHTML="Good Evening.";
   } //Output if value received is greater than 17

   

}


function myFunction3() {  //Agility test Function
   Agility=document.getElementById("ABC").value;
   if (Agility >= 5) {  //Value required to get the 
      Jump = " made it across the ravine."  //Outcome if min value is met
   }
   else {
      Jump = " fell into the ravine."  //Outcome if min value is not met
   }
   document.getElementById("Jumped").innerHTML= Jump; //Output of function to html document
}

function Time_function() {  //Time of day function
   var Time = new Date().getHours();
   var Reply;
   if (Time < 12 == Time <18) {
      Reply ="It is morning time!";//Time output if the value received is between 0-1159
   }
   else if (Time > 23 == Time < 18) {
      Reply = "It is the afternoon.";//Time output if value received is between 12-18
   }
   else {
      Reply = "It is evening time."; // Time output if value received is not within the ranges of other statements
   }
   document.getElementById("Time_of_day").innerHTML=Reply; //Output sent to Time_of_day element on HTML Doc
}