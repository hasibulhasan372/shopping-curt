// task : enable the plus minus button for increase and decrease the amount and price for purchasing the phone 
// Step : 1 Creating a function for the common step 

// function phoneShopping(isIncrease){
//     // Step : 2 Get the input value and adding with Previous value

// // SubStep: 1 get the input element by the ID 
// const phoneInputValue = document.getElementById('input-number-phone');
// // SubStep: 2 Get the  input value as a string 
// const previousValueString = phoneInputValue.value;
// // SubStep : 3 Convert the string to value 
// const previousValue = parseInt(previousValueString);
// // SubStep: 4 Increase and decrease  the amount by 1 
// let newAmount ;
// if(isIncrease === true){
//     newAmount = previousValue + 1;
// }
// else{
//     newAmount = previousValue - 1;
// };
// // SubStep : 5 Set the amount into the input value  
// phoneInputValue.value = newAmount;
// return newAmount;
// };
// Step : 3 make function for getting the Total phone price 
function getPhonePrice(newAmount) {
    const phonePrice = document.getElementById('phone-price');
    const previousPhonePriceString = phonePrice.innerText;
    const newPhonePrice = newAmount * 1219;
    phonePrice.innerText = newPhonePrice;
}
// Step :4 create a event for the plus button 
document.getElementById('btn-plus-phone').addEventListener('click', function () {
    const newAmount = inputValue('input-number-phone', true);
    getPhonePrice(newAmount);
    subTotal()
});

// Step : 3 Create a event for the Minus  button 
document.getElementById('btn-minus-phone').addEventListener('click', function () {
    // Step : 4 Get the input value and deducting from previous amount 
    const newAmount = inputValue('input-number-phone', false);
    getPhonePrice(newAmount);
    subTotal()
});