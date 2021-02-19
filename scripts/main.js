"use strict";

//1. Define the onclick handler
/*function display() {
	var output = $("#gallons").val();
	$("#gallonsDisplay").html(output);
}*/


//Convert Gallons to Liters
function fluidConverter(valNum) {
	document.getElementById("outputLiters").innerHTML = valNum*3.785412;
}