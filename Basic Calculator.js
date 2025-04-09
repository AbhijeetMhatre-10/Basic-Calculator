// Grab the display element where the numbers and result appear
let display = document.getElementById("display");

// Add a number or dot to the display
function appendNumber(number) {
    // If display is just 0 or an invalid result, replace it
    if (display.innerText === "0" || display.innerText === "NaN" || display.innerText === "Infinity") {
        display.innerText = number;
    } else {
        // Otherwise, just add the number to what's already there
        display.innerText += number;
    }
}

// Add a math operator (+, -, *, /)
function appendOperator(operator) {
    let current = display.innerText;
    let lastChar = current[current.length - 1];
    let operators = ["+", "-", "*", "/"];

    // Avoid adding two operators one after another
    if (operators.includes(lastChar)) {
        display.innerText = current.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

// Clears everything and resets the display to 0
function clearDisplay() {
    display.innerText = "0";
}

// Deletes the last digit or operator from the display
function deleteLast() {
    let current = display.innerText;

    // If there's more than one character, remove the last one
    if (current.length > 1) {
        display.innerText = current.slice(0, -1);
    } else {
        // Otherwise just reset to 0
        display.innerText = "0";
    }
}

// Converts the last number to a percentage (divide by 100)
function percentage() {
    let current = display.innerText;

    // Look for the last number entered
    let match = current.match(/(\d+\.?\d*)$/);
    if (match) {
        let number = parseFloat(match[0]);
        let percentValue = number / 100;

        // Replace the number in the string with the calculated percentage
        display.innerText = current.replace(/(\d+\.?\d*)$/, percentValue);
    }
}

// Evaluates the full expression (e.g. "4+5*2")
function calculate() {
    try {
        // Use eval to do the calculation
        display.innerText = eval(display.innerText);
    } catch {
        // If something goes wrong, show "NaN"
        display.innerText = "NaN";
    }
}
