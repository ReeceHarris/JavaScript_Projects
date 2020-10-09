function myFunction () {  // What I came up with before seeing the examples

   var Q = "9";
   var W = "8";
   document.write(W * Q);

}

function myFunction2 () {  // minus function
   var subtraction = 8 - 6; 
   document.getElementById("Math").innerHTML= "8-6 = " + subtraction;
   
}

function myFunction3 () {  // multiply fuction
   var multiplication = 4 * 10;
   document.getElementById("Math3").innerHTML= "6 x 8 = " +
multiplication;

}

function myFunction4 () { //divide function
   var division = 2 * 20;
   document.getElementById("Math4").innerHTML= "2 / 20 = " +
division;

}

function myFunction5 () {  //Multi operation function so used var name multi for clarity
   var multi = (5 + 6) * 4 / 2 -1;
   document.getElementById("Math5").innerHTML=" 5 plus 6, multiplied by 4 divided in half and then subtracted by 1 equals " + multi; 
}

function myFunction6 () { // 
   var R = 25 % 6;
   document.getElementById("Math6").innerHTML= "When you divide 25 by 6 you have a remainder of: " + R; 
}

function myFunction7 () { //negation operand
   var t = 35;
   document.getElementById("Math7").innerHTML = -t;

}

var X1 = 10; //positive increment function
X1++; 
document.write(X1);

var X1 = 10; //negative increment function
X1--; 
document.write(X1);

window.alert(Math.random()  * 100 ); //Random number generator in alert window 


function myFunction8() { //Exponent function 5^8 in this configuration
   var I = 5;
   document.getElementById("Math8").innerHTML = (Math.pow(I,8)); //Got stuck here for 30 minutes trying different configurations turns out I miss-spelled myFucntion fixed it forgot to capitalize saw it 10 minutes later and now it works. I will now double check every line for spelling and cases as I type. 

}