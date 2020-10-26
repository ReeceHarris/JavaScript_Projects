function myForm1() {
   var x = document.forms["myForm"]["Name"].value;
   if (x == "") {
     alert("Name and Email must be filled out");
     return false;
   }
 }


