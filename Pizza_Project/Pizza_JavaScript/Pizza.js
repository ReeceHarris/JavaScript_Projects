function getReceipt() {
	//This initializes our string so it can get passed from  
	//Function to function, growing line by line into a full receipt
   var text1 = "<h3>You Ordered:</h3>";
    //Declaring Variables for later
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size"); //Calls the size value selected
	for (var i = 0; i < sizeArray.length; i++) { 
		if (sizeArray[i].checked) {  
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
   }
   //Size selection and cost value is determined
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Small Pizza") {
		sizeTotal = 8;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	} else if (selectedSize === "Party Pizza") {
		sizeTotal = 18;
	} //Radio button 
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getTopping(runningTotal,text1); // All three of these variables will be passed on to each function
};
//Function to determien amount of toppings and pushes that info to toppingArra[J]
function getTopping(runningTotal,text1) {
	var toppingTotal = 0;
	var selectedTopping = [];
	var toppingArray = document.getElementsByClassName("toppings");
	for (var j = 0; j < toppingArray.length; j++) {
		if (toppingArray[j].checked) {
			selectedTopping.push(toppingArray[j].value);
			console.log("selected topping item: ("+toppingArray[j].value+")");
			text1 = text1+toppingArray[j].value+"<br>";
		}
   }
   //Determining the value of topings added
	var toppingCount = selectedTopping.length;
	if (toppingCount > 1) {
		toppingTotal = (toppingCount - 1);
	} else {
		toppingTotal = 0;
	}
   runningTotal = (runningTotal + toppingTotal);
   //Adds runningTotal and ToppingTotal into 1 variable
   console.log("total selected topping items: "+toppingCount);
   //Totals the amount of toppings selected
   console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
   //Calculates the cost of toppings minus 1 free topping. 
	console.log("topping text1: "+text1);
   console.log("Purchase Total: "+"$"+runningTotal+".00");
   //Final cost output is calculated
	document.getElementById("showText").innerHTML=text1; //Sends output of runningTotal to text1
   document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
   //Final output is sent to ID totalPrice 
};	