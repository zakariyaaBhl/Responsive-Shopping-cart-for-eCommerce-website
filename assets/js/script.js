'use strict';

/**
 * All Initial Elements
 */

const payAmountBtn = document.querySelector('#payAmount');
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');

const priceElem = document.querySelectorAll('#price');
const subtotalElem =document.querySelector('#subtotal');
const taxElem = document.querySelector('#tax');
const totalElem = document.querySelector('#total');

/**
 * loop: for add event on multiple 'increment' & 'decrement' button
 */

incrementBtn.forEach (incrementBtnClick =>{
    incrementBtnClick.addEventListener('click', () => {

        // collect the value of quantity textContent
        // based on clicked 'increment' button subling.
        let increment = Number(incrementBtnClick.previousElementSibling.textContent);

        // plus 'increment' variable value by 1
        increment++;

        //show the 'increment' variable value on 'quantity' element
        //based on clicked 'increment' button sibling
        incrementBtnClick.previousElementSibling.textContent = increment;

        totalCalc();
    }); 
})

decrementBtn.forEach (decrementBtnClick =>{
    decrementBtnClick.addEventListener('click', ()=>{

        // collect the value of quantity textContent
        // based on clicked 'decrement' button subling.
        let decrement = Number(decrementBtnClick.nextElementSibling.textContent);

        // minus 'decrement' variable value by 1
        decrement <= 1 ? 1 :  decrement--;

        //show the 'decrement' variable value on 'quantity' element
        //based on clicked 'decrement' button sibling
        decrementBtnClick.nextElementSibling.textContent = decrement;
        
        totalCalc();
    }); 
})

/**
 * function for calculating total amount of product price
 */

function totalCalc() {
    
    const tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;
    
    // loop for calculating 'subtotal' value from every single product
    for (let i = 0; i < quantityElem.length; i++) {
        subtotal += (+quantityElem[i].textContent) * (+priceElem[i].textContent);
    }

    // Show the subtotal variable value on 'subtotalElem' element
    subtotalElem.textContent = subtotal.toFixed(2);

    // Calculating the 'TotalTax'
    totalTax = subtotal * tax;

    // Show the 'TotalTax' on 'taxElem' element
    taxElem.textContent = totalTax.toFixed(2);
    
    // Calculating the 'Total'
    total = subtotal + totalTax;

    // Show the 'total' variable value on 'totalElem' and 'payAmountBtn' element
    totalElem.textContent = total.toFixed(2);
    payAmountBtn.innerHTML = total.toFixed(2);
};