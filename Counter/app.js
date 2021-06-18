// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");   // selecting the span id value
const btns = document.querySelectorAll(".btn");   // select all buttons from button class btn

btns.forEach(function (btn) {   // for each button of btns we are using a function(which have the variable named btn)
	btn.addEventListener("click", function (e) {   /* now we are adding event listener in every btn, after
													clicking the button, it would perform a specific function, 
													having a variable named e (event). */ 
		const styles = e.currentTarget.classList;	/* currentTarget will specify which button I clicked on and classList
													is used to get specifically the class list from the actual button.
													We are storing this value in a variable named "style". */
		if (styles.contains("decrease")) {   // if our variable "styles" contains a specific class named "decrease"
			count--;   // we are decreasing the value of count	 	  			
		} else if (styles.contains("increase")) {   // if our variable "styles" contains a specific class named "increase"
			count++;   // we are increasing the value of count
		} else {
			count = 0;   // resetting the value into 0
		}

		if (count > 0) {   // if the count is greater than 0, then we are setting the span color into green
			value.style.color = "green";
		} else if (count < 0) {   // if the count is less than 0, then we are setting the span color into red
			value.style.color = "red";
		} else {   // for 0 it will be black
			value.style.color = "black";
		}

		value.textContent = count;   /* now we are setting the result of count into the variable(value) which hold the 
									 value of span class(our count number). */
	});
});