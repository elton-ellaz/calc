var numbers = document.querySelectorAll(".number").length;
for (i = 0; i < numbers; i++) {
    document.querySelectorAll(".number")[i].addEventListener("click", function () {
        var display = document.getElementById("display");
        var currentValue = display.value;
        var clickedNumber = this.textContent;
    
        display.value = currentValue + clickedNumber;

        var display = document.getElementsByClassName("key-operate");
        var clickedOperator = this.textContent;
            

        if (clickedOperator === "+") {
            display.value = add(parseFloat(currentValue), parseFloat(clickedNumber));
        } else if (clickedOperator === "-") {
            display.value = sub(parseFloat(currentValue), parseFloat(clickedNumber));
        } else if (clickedOperator === "*") {  
            display.value = mult(parseFloat(currentValue), parseFloat(clickedNumber));
        } else if (clickedOperator === "/") {
            display.value = div(parseFloat(currentValue), parseFloat(clickedNumber));
        } else if (clickedOperator === "=") {
            var display = document.getElementById("display");
            var result = eval(currentValue);
            display.value = result;
        } else if (clickedOperator === "C"){
            document.getElementById("display").value="";
            calcDone=false;
        }
console.log(currentValue,clickedOperator,display.value);
    })
}
