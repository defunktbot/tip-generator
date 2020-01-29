/* 
 * Richiel Galacgac
 * Period 3
 * Coding 1
*/

function getBillNumber() {
	var billNum = document.getElementById("billNumber").value;
}

function calculatePercentage() {
	var tipPercent = document.getElementById("tipPercent").value;

	var percentage = tipPercent / 100; //divides tip percent entered by 100
	var calculatedPercentage = billNum * percentage; // multiplies percentage with bill amount
	document.getElementById("tip").innerHTML = calculatedPercentage; // displays results?
}