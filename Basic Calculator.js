// Get the input display element and initialize variables for current input and memory
let inputDisplay = document.getElementById("inputDisplay");
let currentInput = "";
let memoryValue = 0;

// Append a value (number or operator) to the current input
function appendValue(value) {
    // Prevent adding multiple decimal points
    if (value === "." && currentInput.includes(".")) {
        return;
    }
    currentInput += value;
    inputDisplay.value = currentInput;
}

// Evaluate the current input and display the result
function calculate() {
    try {
        let result = eval(currentInput);  // Use eval to evaluate the mathematical expression
        if (isFinite(result)) {
            inputDisplay.value = result;
            currentInput = String(result);  // Update currentInput to the result for further operations
        } else {
            inputDisplay.value = "Error";
            currentInput = "";  // Reset input on error
        }
    } catch (error) {
        inputDisplay.value = "Error";
        currentInput = "";  // Reset input on error
    }
}

// Calculate the square root of the current input
function calculatSquateRoot() {
    if (currentInput) {
        let value = parseFloat(currentInput);
        let result = Math.sqrt(value);  // Calculate square root
        if (!isNaN(result)) {
            inputDisplay.value = result;
        } else {
            inputDisplay.value = "Error";  // Error if the result is not a valid number
        }
        currentInput = String(result);
    }
}

// Calculate the percentage of the current input
function calculatePercentage() {
    if (currentInput) {
        let value = parseFloat(currentInput);
        let result = value / 100;  // Calculate percentage
        if (!isNaN(result)) {
            inputDisplay.value = result;
        } else {
            inputDisplay.value = "Error";  // Error if the result is not a valid number
        }
        currentInput = String(result);
    }
}

// Clear the display and reset current input
function clearDisplay() {
    currentInput = "";
    inputDisplay.value = "";
}

// Remove the last character from the current input (backspace functionality)
function backspace() {
    currentInput = currentInput.slice(0, -1);
    inputDisplay.value = currentInput;
}

// Add the current input value to memory
function memoryAdd() {
    if (currentInput) {
        memoryValue += parseFloat(currentInput);
        clearDisplay();
    }
}

// Subtract the current input value from memory
function memorySubstract() {
    if (currentInput) {
        memoryValue -= parseFloat(currentInput);
        clearDisplay();
    }
}

// Recall the stored memory value and display it
function memoryRecall() {
    inputDisplay.value = memoryValue;
    currentInput = String(memoryValue);
}

// Clear the stored memory value
function memoryClear() {
    memoryValue = 0;
}

// Add event listener for keyboard input
document.addEventListener("keydown", function(event) {
    let key = event.key;
    console.log(key);
    if (/[0-9]/.test(key)) { 
        appendValue(key);  // Append numeric input
    }
    if (key === "π" || key==="3.14") {  // Handle π input
        appendValue('3.14');
    }
    if (["+", "-", "*", "/"].includes(key)) {
        appendValue(key);  // Handle operator inputs
    }
    if (key === "Enter") calculate();  // Calculate on pressing Enter
    if (key === "Backspace") backspace();  // Remove last character on Backspace
    if (key === "Escape") clearDisplay();  // Clear display on Escape
});
