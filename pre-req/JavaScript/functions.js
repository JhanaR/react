// var x = 896 , y;
// while(x > 0){
//     y = x % 10;             //y = 896 % 10; y = 6                89 % 10             8 % 10
//     console.log(y); //698     //6                                9                   8
//     x = Math.floor(x/10);    //896/10 = floor(89.6) = 89         89 / 10 8.9 8       0.89
// }
//Function Declaration
// function add(num1,num2){
//     console.log(num1+num2);
// }
// var add = add(30,40);
// console.log(add(30,20));
// add(100,200);
// add(12000,3000);

// Function Expressions
// var sub = function(num1,num2){

//    return num1-num2;
// }
// console.log("function expression call----",sub(50,30));
//  // Nested Functions

//  function averageMarks(html,css,js){

//     function totalMarks(html,css,js){   //private to the function averageMarks
//         return (html+css+js);
//     }
//      return totalMarks(html,css,js)/3;
//  }
//  console.log("average----",averageMarks(3,4,5));

// Arrow Functions

let doDisplay = message =>  console.log(message);
   
doDisplay("Arrow Functions Display");
		  
//Arrow function with single parameter and without return value 
// let cube = (num) => {
//    console.log(Math.pow(num,3));
// }
// let cube = num => {
//    console.log(Math.pow(num,3));
// }
// more simplification
let cube = num => Math.pow(num,3);	
console.log(cube(10));

//IIFE

(function(){
   console.log("IIFE");
})();

(function(){
   let num1=30,num2=40;
   console.log(num1+num2);
})();
		
(function(num1,num2){
   console.log(num1+num2);
})(65,67);

let sum = (function(num1,num2){
   return num1+num2;
})(180,20);

console.log(sum);