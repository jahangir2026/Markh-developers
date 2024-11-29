/* script.js */

let display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculate() {
    try {
        // Evaluate the expression using `eval`
        let result = eval(display.innerText);
        if (!isFinite(result)) {
            throw new Error("Division by zero");
        }
        display.innerText = result;
    } catch (error) {
        display.innerText = "Error";
    }
}

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1) || "0";
    } else if (key === "Escape") {
        clearDisplay();
    }
});
