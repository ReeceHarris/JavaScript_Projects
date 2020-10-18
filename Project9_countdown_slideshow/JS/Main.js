

 var slideIndex = 1;
 showSlides(slideIndex);

 //Next/previous controls 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 //Thumbnail image controls
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }

 function showSlides(n) { //Function for showing slides
   var i; //declaring variable
   var slides = document.getElementsByClassName("mySlides"); 
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}    //if statement to determine which slide to use
   if (n < 1) {slideIndex = slides.length}   
   for (i = 0; i < slides.length; i++) {     //for statement to incremement slide index by 1 
       slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {  //increments dots 1 to maintain accurate position
      dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
 }
 
 
 
 
 function countdown() {  //basic countdown function
   var seconds = document.getElementById("seconds").value;

   function tick() {  //function for tick rate of the countdown
      seconds = seconds -1; 
      timer.innerHTML = seconds;
      setTimeout(tick, 1000); //setting tick rate to 1: 1000ms 
      if(seconds == -1){   //if statement for alert that timer is up
         alert("Time's up!");
      }  
         }
         tick();
 }