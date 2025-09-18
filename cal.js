const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value ="";

}

function calculate() {
    try {
        let expression = display.value;

        expression = expression.replace(/[\+\-\*\/\.]+$/, "");
        display.value = eval(expression);

    } catch (e) {
        display.value = "Error!";
    }
    
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

