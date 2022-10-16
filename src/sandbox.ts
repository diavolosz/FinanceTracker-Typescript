const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

console.log('hi')

//--------------- Intro Types ---------------------


let string = 'testing'
let string2: string
let number: number
let boolean: boolean
let anyType: any 
// we can change the value BUT not the types 


//----------------- Array --------------------


let stringArr: string[] = []
stringArr = ['a', 'b']
// this is how we assign types to an array 

stringArr.push('c')
// stringArr.push(1)
// this also ensure values that are added afterward will also be verified 


let mixedArr = ['ken', 1, 2, true]
mixedArr.push(1)
mixedArr[1] = 'string'
mixedArr.push('some string')
// this works because we declared a variable array that contains different types 


let stringArr2: (string | number)[] = []
stringArr2.push(1)
stringArr2.push('some string')
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


const someFunc = (numInput: number, stringInput: string) => {
  console.log(numInput)
  console.log(stringInput)
}
// here we foreced input types for a function 


const someFunc2 = (numInput: any, stringInput: any): boolean => {
  console.log(numInput)
  console.log(stringInput)
  return true
}
// here we forced the RETURN VALUE TYPES by placing it after input bracket in a function 
// this basically removes NaN or undefined possibility
// no console log requried to varify output 


const add = (a: number, b: number, c?: number | string ) => {
  console.log(a + b)
  console.log(c)
}
// optional parameter are denoted with a "?" in the bracket 

const add2 = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b)
  console.log(c)
}
// here we have a default value to parameter C 
// we do not need a "?" here because there is already a default value



//-------------------------------------


// we can also use a 'type' keyword like a vraible 
// but this is a variable to a set of types restriction

type stringOrNumber = string | number 
type studentName = string


let student1:studentName = 'Michael'

let someValue1:stringOrNumber = 'string'
let someValue2:stringOrNumber = 12


// also works on a object type 

type objectWithName = {name: string, id:stringOrNumber}


//-------------------------------------




