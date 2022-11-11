//to check if input is valid (number or given below operators)
function checkNum(expression) {
    for (var i = 0; i < expression.length; i++) {
        var ch = expression.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "+" && ch != "-" && ch != "*" && ch != "/" && ch != "%"
                && ch != "(" && ch != ")" && ch != ".") {
                alert("Invalid Expression!")
                return false
            }
        }
    }
    return true
}

//append expression and show in display console
function addChar(displayInput, character) {
    if (displayInput.value == null || displayInput.value == "0")
        displayInput.value = character
    else
        displayInput.value += character
}

//to act as backspace
function deleteChar(displayInput) {
    displayInput.value = displayInput.value.substring(0, displayInput.value.length - 1)
}

//to do mathematical evaluation 
function compute(form) {
    form.display.value = eval(form.display.value);
}

//function to find exponential
function exp(form) {
    form.display.value = Math.exp(form.display.value);
}

//function to find logarithmic value
function log(form) {
    form.display.value = Math.log(form.display.value);
}

//function to find squareRoot
function squareRoot(form) {
    form.display.value = Math.sqrt(form.display.value);
}

//function to find square value
function squareValue(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value)
}

//function to toggle Sign (+ -> - || - -> +)
function changeSign(input) {
    if (input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}

// evaluate cos theta
function cos(form) {
    form.display.value = Math.cos(form.display.value);
}

// evaluate sin theta
function sin(form) {
    form.display.value = Math.sin(form.display.value);
}

// evaluate tan theta
function tan(form) {
    form.display.value = Math.tan(form.display.value);
}

setInterval(() =>{
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.border = `5px solid #${randomColor}`;
    document.body.style.transitionDuration = "3s";
},1000);