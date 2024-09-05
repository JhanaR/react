console.log("First Javascript Program"); //printing on console
// document.getElementById("paragraph").innerHTML="First Paragraph";

var fruit = "Apple";
//console.log("data type------",typeof(fruit));

// var x;
// console.log(typeof(x));  // undefined
// var x=10;
// console.log(x); // 10
// console.log(typeof(x)); // number
// x=9.6;
// console.log(typeof(x)); // float
// x=false;
// console.log(typeof(x)); // boolean
// x="savitha";
// console.log(typeof(x)); // string

var b1=true , b2 = false, b3=true;
	
	    console.log(b1 && b2) ;  // false 
		console.log(b1 && b3) ;  // truw
		console.log(b1 && b2 && b3);//left to right output false 
		console.log(b1 || b2); //true
		console.log(b1 || b3); //true
		console.log(b1 || b2 || b3); //true 
		console.log(b1 || b2 && b3); //true
		// console.log(b1 || b2); // true 
		// console.log(!b3); // false 
        console.log(b2 && !b3);
        console.log(b1 || b2 && !b3); // worst case
                    //  true && false => true cbbbb

                    
	