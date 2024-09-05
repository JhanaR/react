//functions are the building blocks, Allow not to repeat the code 
          

// Diff btw Function Declaration and Function Expression 
			  
// => with  function declaration calling is possible without declaration
// => with function expression calling is not possible without declaring it 
			  

//function declaration
/*function sum(){
  let a = 5;
  let b = 10;
  let add = a+b;
  console.log(add);
}

sum();*/


//function expression
// let add = function sum(a,b){
// console.log("Value of a assigned as:", a);
// console.log("Value of b assigned as:", b);
// console.log("Additional of two values:", add);
// }

// sum(5,10);

/*
FUNCTION EXPRESSION

let sum = function(a, b) {
  return a + b;
};

sum();// function call;

//FUNCTION DECLARATION
sum(5,5);// follows hoisting so it will show the result
console.log('sum',sum(5,5))

function sum (a, b) {
  return a + b;
};

sum(5,5);// function call follows hoisting method;
console.log('sum',sum(5,5))*/

let array =[1,2,3,4,5];

// let doubleArray = function(array){
//   let addition = 0
//   for(let val of array){//for of loop used for arrays.
//     addition += val
// }
// return addition
// }

//console.log(doubleArray(array))

//===OR===

//converting above function into arrow function----simply function.

let doubleArray = (array) => { let addition = 0
     for(let val of array){//for of loop used for arrays.
      addition += val
 }
 return addition
}
console.log(doubleArray(array))