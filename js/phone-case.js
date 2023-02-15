
// function inputValue(isIncrease){
//        const inputNumber = document.getElementById('btn-case-input');
//        const InputNumberString = inputNumber.value;
//        const previousInputValue = parseInt(InputNumberString);
//        let newInputValue;
//        if(isIncrease === true){
//         newInputValue = previousInputValue + 1;
//        }
//        else{
//         newInputValue = previousInputValue - 1;
//        };
//        inputNumber.value = newInputValue;
//        return newInputValue;
// };

function casePriceFunction(newInputValue) {
    const casePrice = document.getElementById('case-price');
    const totalCasePrice = newInputValue * 59;
    casePrice.innerText = totalCasePrice;
};

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newInputValue = inputValue('btn-case-input', true);
    casePriceFunction(newInputValue);
    subTotal()
});
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newInputValue = inputValue('btn-case-input', false);
    casePriceFunction(newInputValue);
    subTotal()
});