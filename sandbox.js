const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
console.log('hi');
//--------------- Intro Types ---------------------
let string = 'testing';
let string2;
let number;
let boolean;
let anyType;
// we can change the value BUT not the types 
//----------------- Array --------------------
let stringArr = [];
stringArr = ['a', 'b'];
// this is how we assign types to an array 
stringArr.push('c');
// stringArr.push(1)
// this also ensure values that are added afterward will also be verified 
let mixedArr = ['ken', 1, 2, true];
mixedArr.push(1);
mixedArr[1] = 'string';
mixedArr.push('some string');
// this works because we declared a variable array that contains different types 
let stringArr2 = [];
stringArr2.push(1);
stringArr2.push('some string');
// this is a UNION TYPE. which allows multiple type array declaration 
//------------------ Object -------------------
let someObj = {
    name: 'name',
    age: 20
};
// same thing with an array, we are declaring a type to each key in this obejct 
// NOTE: Once we defined an object, we cannot add new property to it
// if we want to override, we must remake the complete the entire obejct 
// and matching the origin structure 
//----------------- Function --------------------
const someFunc = (numInput, stringInput) => {
    console.log(numInput);
    console.log(stringInput);
};
// here we foreced input types for a function 
const someFunc2 = (numInput, stringInput) => {
    console.log(numInput);
    console.log(stringInput);
    return true;
};
// here we forced the RETURN VALUE TYPES by placing it after input bracket in a function 
// this basically removes NaN or undefined possibility
// no console log requried to varify output 
//-------------------------------------
