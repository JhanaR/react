// Diff btw Let , Var and Const 

			  
			  /*1. Hoisting   
			  2. Scope/Memory
			  3. Redeclaration/ Updation 
Hoisting means it is a mechanism where it moves the variable/function declaration to the top of its nearest scope,with let and const hoisting will not work .
	
			  
 			  ES6 let and const were introduced to reduce the bugs at run time 
			  
 			  2. Scope/Memory 
                var is a function level scope 
    			let/const are block level scope { }
			  
    		    //var scope will be available throught the function 
     			 // let means block level scope only in that block it will be visible
			
			  
			  3. Redeclaration / Updation 
			  
			    var supports redeclaration and  updation 
				 				let supports only updation 
				 				with const no redeclaration / updation */
//examples

/*var a = 10;
var a = 15;//redeclare
var a = 98;//redeclare
a = 100;//updation.
// var function level variable

var a;
 console.log(a);//nearest scope
 a = 10 ;
	          


const k = 10;//redeclare not possible
let b = 15;//redeclare not possible
b = 100;//updation possible for var and let alone.
//

const arr = [1,2,3,4];//reassigning array is not possible but we can change value for the index of arr
arr[0] = 0;
console.log(arr);*/

/*function letCheck() {
    for(let a=0; a<7; a++){
        console.log("a inside for let:", a);
    }
    console.log("a inside function but outside for let:", a);//error because it is outside the for loop
}
//console.log("a outside function for let:", a);//error because it is outside

letCheck();

function constCheck() {
    for(let a=0; a<7; a++){
        console.log("a inside for:", a);
    }
    //console.log("a inside function but outside for:", a);//error because it is outside the for loop
}
//console.log("a outside function:", a);//error because it is outside

constCheck();*/

function varCheck() {
    for(var a=0; a<7; a++){
        console.log("a inside for var:", a);
    }
    //console.log("a inside function but outside for var:", a);//it is outside the for loop it shows final output---(a inside function but outside for: 7)
}
//console.log("a outside function for var:", a);//error because it is outside

varCheck();