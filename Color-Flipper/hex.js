const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];   
// Hexadecimal number 16, starting from 0 to "F"
// hex code example: #f15025, six number after "#"

const btn = document.getElementById("btn");   // assigned the value of button id "btn" into variable "btn"
const color = document.querySelector(".color");   // assigned the span class color into variable "color"

btn.addEventListener("click", function() {   /* now we are adding event listener, after clicking the button, 
												it would perform a specific function */ 
	let hexColor = "#";   // hexcode should start with a "#"
	for (let i = 0; i < 6; i++) {   // we are adding 6 hexadecimal random number after "#"
		hexColor += hex[getRandomNumber()];
	}

	document.body.style.backgroundColor = hexColor;   // changing the background color of the page
	color.textContent = hexColor;   // changing the color name of span class named color

}); 

function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
}