// task : enable the plus minus button for increase and decrease the amount and price for purchasing the phone 
// Common version 
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


// task : enable the plus minus button for increase and decrease the amount and price for purchasing the phone 
// single Version 
// Step : 1 Creating a function for the common step 

function phoneShopping(isIncrease) {
    // Step : 2 Get the input value and adding with Previous value

    // SubStep: 1 get the input element by the ID 
    const phoneInputValue = document.getElementById('input-number-phone');
    // SubStep: 2 Get the  input value as a string 
    const previousValueString = phoneInputValue.value;
    // SubStep : 3 Convert the string to value 
    const previousValue = parseInt(previousValueString);
    // SubStep: 4 Increase and decrease  the amount by 1 
    let newAmount;
    if (isIncrease === true) {
        newAmount = previousValue + 1;
    }
    else {
        newAmount = previousValue - 1;
    };
    // SubStep : 5 Set the amount into the input value  
    phoneInputValue.value = newAmount;
    return newAmount;
};


// SubTotal Calculation without tax details Version
const getTotalPhonePrice = document.getElementById('phone-price');
const totalPhonePriceString = getTotalPhonePrice.innerText;
const totalPhonePrice = parseFloat(totalPhonePriceString);

const getTotalPhoneCasePrice = document.getElementById('case-price');
const totalPhoneCasePriceString = getTotalPhoneCasePrice.innerText;
const totalPhoneCasePrice = parseFloat(totalPhoneCasePriceString);



// SubTotal Calculation without tax common Version

function phoneCasePrice(elementId) {
    const getTotalPhonePrice = document.getElementById(elementId);
    const totalPhonePriceString = getTotalPhonePrice.innerText;
    const totalPhonePrice = parseFloat(totalPhonePriceString);
    return totalPhonePrice;

}
// SubTotal Calculation without tax details Version Function Version 
function subTotal() {
    const phoneTotalPrice = phoneCasePrice('phone-price');
    const phoneCaseTotalPrice = phoneCasePrice('case-price');
    const totalPrice = phoneTotalPrice + phoneCaseTotalPrice;

    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = totalPrice;
}
// SubTotal Calculation without tax details Version 
const phoneTotalPrice = phoneCasePrice('phone-price');
const phoneCaseTotalPrice = phoneCasePrice('case-price');
const totalPrice = phoneTotalPrice + phoneCaseTotalPrice;

const subTotal = document.getElementById('sub-total');
subTotal.innerText = totalPrice;


// SubTotal and Tax adding Details Version 

const subTotal = document.getElementById('sub-total');
subTotal.innerText = totalPrice;
const subTotalAmount = parseFloat(subTotal.innerText);

const taxAmount = document.getElementById('tax-amount');
taxAmount.innerText = totalTaxAmount;
const taxTotalAmount = parseFloat(taxAmount.innerText);




