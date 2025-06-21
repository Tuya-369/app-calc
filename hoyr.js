let display = document.getElementById("display");
let operator = null;
let ehniiToo = "";
let hoyrdhUtga = "";
let result = ""
 
 
 
 
const onSelectNumber = (number) => {
 
    if (operator === null) {
        ehniiToo += number;
        display.value = ehniiToo;
    } else {
        hoyrdhUtga += number;
        display.value = hoyrdhUtga;
    }
}
const onSelectOperator = (selectedOperator) => {
    // display.value = selectedOperator;
    operator = selectedOperator
 
}
 
function container() {
    const num1 = Number(ehniiToo)
    const num2 = Number(hoyrdhUtga)
    // if (ehniiToo === "" || hoyrdhUtga === "" || operator === null) {
    //     display.value = "Error";
    //     return;
    // }
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
 
    } else if (operator === "x") {
        result = num1 * num2;
 
    } else if (operator === "/") {
        result = num1 / num2;
    }
    display.value = result;
    // console.log(result);
}
 
function clearDisplay() {
    display.value =
    ehniiToo = ''
    hoyrdhUtga = ''
    result = ''
    operator = null
}
 
 
// // function onSelectNumber(number) {
//     if (operator === null) {
//         ehniiToo + number;
//         display.value += number;
//     }
 
// }
// function onSelectNumber(operator) {
//     if (operator === 'x') {
//         display.value += 'operator';
//     } else {
//         display.value += number;
//     }
// }
 
 
 
// // function temtsuu() {
// //     try {
// //         display.value = eval(display.value);
// //     } catch (error) {
// //         display.value = "Error";
// //     }
// // }
// function clearDisplay() {
//     display.value = '';
// }
 
 