const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];   // array of colours

const btn = document.getElementById("btn");   // assigned the value of button id "btn" into variable "btn"
const color = document.querySelector(".color");   // assigned the span class color into variable "color"

btn.addEventListener("click", function () {   /* now we are adding event listener, after clicking the button, 
												it would perform a specific function */ 
	// get random number between 0 - 3
	const randomNumber = getRandomNumber();   // we will get a random number from getRandomNumber() function
	// console.log(randomNumber);
	document.body.style.backgroundColor = colors[randomNumber];   // changing the background color of the page
	color.textContent = colors[randomNumber];   // changing the color name of span class named color
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);   // Math.floor to get integer value
}