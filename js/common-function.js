function inputValue(elementId, isIncrease) {
    const inputNumber = document.getElementById(elementId);
    const InputNumberString = inputNumber.value;
    const previousInputValue = parseInt(InputNumberString);
    let newInputValue;
    if (isIncrease === true) {
        newInputValue = previousInputValue + 1;
    }
    else {
        newInputValue = previousInputValue - 1;
    };
    inputNumber.value = newInputValue;
    return newInputValue;
};

function phoneCasePrice(elementId) {
    const getTotalPhonePrice = document.getElementById(elementId);
    const totalPhonePriceString = getTotalPhonePrice.innerText;
    const totalPhonePrice = parseFloat(totalPhonePriceString);
    return totalPhonePrice;

}
function subTotalAndTax(elementId, value){
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
    const subTotalAmount = parseFloat(subTotal.innerText);
    return subTotalAmount;
};

function subTotal() {
    // SubTotal Calculation without tax
    const phoneTotalPrice = phoneCasePrice('phone-price');
    const phoneCaseTotalPrice = phoneCasePrice('case-price');
    // Sub Total Tax Calculation 
    const totalPrice = phoneTotalPrice + phoneCaseTotalPrice;
    const totalTaxAmount = (totalPrice * 0.1).toFixed(2) ;
    const subTotal = subTotalAndTax('sub-total',totalPrice);  
    const TaxTotal = subTotalAndTax('tax-amount',totalTaxAmount);  
    
//    Total Calculation
    const finalAmount = subTotal + TaxTotal ;
    const totalAmount = document.getElementById('total-amount');
          totalAmount.innerText = finalAmount; 

    // Total Cost Calculation 

}