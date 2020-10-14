document.write(typeof "Word"); //displaying type of value "Word" is a string

var myStr = "Word1"; //declaring var myStr for testing
var myNumber = "5"; //declaring myNumber for testing

function myFunction() {
   document.getElementById("Test").innerHTML = 0/0; //Dividing by 0 to show error

}

function myFunction2() {
   document.getElementById("Test2").innerHTML = isNaN("007"); //Checking if "007" is a number

}

function myFunction3() {
   document.getElementById("Test3").innerHTML = isNaN( NaN ); //Checking if NaN is a number

}


   document.write(4E310) //Displaying infinity due to overly large number value
   document.write(" ___  "); //adding spacing to clarify document.write outputs



   document.write(-4E310) //Displaying negative infinity due to overly large number value
   document.write(" ___  "); //adding spacing to clarify document.write outputs

   document.write(10 >2); // using Boolean logic 
   document.write(" ___  "); //adding spacing to clarify document.write outputs

   document.write(10<2);
   document.write(" ___  "); //adding spacing to clarify document.write outputs

console.log(2+2);

document.write("105" + 83); //Using Coercion on 2 different value types string and number
document.write(" ___  "); //adding spacing to clarify document.write outputs


console.log(5<1); //console.log test

document.write(10 == 12); // Utilizing the == operator

document.write(" ___  "); //adding spacing to clarify document.write outputs

document.write("17"==="17"); //Checking the 2 value types are equal

document.write(" ___  "); //adding spacing to clarify document.write outputs


document.write("Seventeen"===22); //Checking if the 2 value types are equal returns False

document.write(" ___  "); //adding spacing to clarify document.write outputs

document.write(17==="17"); //Checking the 2 value types this comes back false due to different typing


document.write(" ___  "); //adding spacing to clarify document.write outputs

document.write(13===12); // Checking value 

document.write(" ___  "); //adding spacing to clarify document.write outputs

document.write(2<22 && 25>5);  //Boolean logic gate both have to be true or false is returned

document.write(" ___  "); //adding spacing to clarify document.write outputs

document.write( 2<3 || 2>5);  //Or logic gate only 1 must be true to return true as result


document.write(" ___  "); //adding spacing to clarify document.write outputs






function notFunction() {  //Testing Not logic operator ! 
   document.getElementById("Not").innerHTML = !( 20 < 15 );

}






