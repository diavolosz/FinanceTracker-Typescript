"use strict";
const anchor = document.querySelector('a');
// note how the anchor has a HTMLAnchorElement
const form = document.querySelector('.new-item-form');
// note how 'form' here is an element not a HTMLFormElement like 
// the anchor text. thats because TS doesnt know the element 
// if we are looking for the class name not the element type
const formWithType = document.querySelector('.new-item-form');
// by specifiying this, we can specify it as a type now 
const typeInput = document.querySelector('#type');
const toFromInput = document.querySelector('#tofrom');
const detailsInput = document.querySelector('#details');
const amountInput = document.querySelector('#amount');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(typeInput.value);
    console.log(toFromInput.value);
    console.log(detailsInput.value);
    console.log(amountInput.valueAsNumber);
});
class Invoice {
    client;
    details;
    amount;
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const inv1 = new Invoice('michael', 'painting the vase', 300);
const inv2 = new Invoice('sam', 'cleaning the floor', 150);
let invoices = [];
