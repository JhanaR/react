//FUNCTION EXPRESSION

let sum = function(a, b) {
  return a + b;
};
//arrow function is a simplied code reduce of lines

//let addingNumber = (a,b) => { return a+b };
//console.log('addingNumber',addingNumber(2,1))
let addingNumber = (a,b) => a+b;
console.log('addingNumber',addingNumber(2,1))

let double = function (n) {
    return n*2;
}

//let doubleNumber = (n) => { return n*2 } inorder more simplyfy.
let doubleNumber = n => n*2
console.log('doubleNumber',doubleNumber(2))
