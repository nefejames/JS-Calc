let digitButtons = document.querySelectorAll("[data-number]")
let operatorButtons = document.querySelectorAll("[data-operator]")
let deleteButton = document.querySelector("[data-delete]")
let clearButton = document.querySelector("[data-clear-all]")
let equalToButton = document.querySelector("[data-equal-to]")
let result = document.querySelector(".result input")

// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null
// }


//clears all ongoing operations
clearButton.addEventListener("click", () => {
    result.value = " ";
})


//delete button
deleteButton.addEventListener("click", () => {
    result.value = result.value.split("").pop();
    console.log(result.value.split(""));

})


//displays the numbers when pressed
digitButtons.forEach(digit => {
    digit.addEventListener("click", () => {
        let resultStorage = result.value.split("")
        if (result.value == "") {
            result.value = digit.value;
        } else if (digit.value == "." && resultStorage.includes(".")) {
            return
        } else {
            result.value += digit.value;
        }
        console.log(resultStorage)
        // console.log(digit)
        // console.log(resultStorage.includes("."))
    })
})


//displays numeric operators
operatorButtons.forEach(operator => {
    operator.addEventListener("click", () => {
        result.value += operator.value;
        console.log(operator.value);
    })
})

//carries out calculation
equalToButton.addEventListener("click", () => {
    result.value = eval(result.value);
    if (result.value[result.value.length - 1] == "÷") {

    }
})
