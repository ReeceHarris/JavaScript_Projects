function myDictionary() { //myDictionary based on characteristics of a house
   var House = {
      design: "Victorian", //deleted key 
      color: "Grey", // Key is color Value is Grey won't display if selected due to lower key and value
      rooms: 3, //numerical value doesn't require quotations 
      bathrooms: 2,
      area: "rural",
      color: "Pink" //If color is called it will display Pink because its later in the dictionary
       

   };
   delete House.design; //Deleted key results on interaction will be undefined
   document.getElementById("Dictionary").innerHTML = House.design; 
   // Line above is used to display the value of design Victorian into the html file with the ID dictionary

}