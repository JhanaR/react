//Primitive: Number, string, Boolean, symbol, undefined,null
let x= "a";
console.log('x',x);

let y= x;
console.log(y);

x = "d";
console.log('updated x',x);


console.log('Again y',y);
//both are independent once value.


//Reference: OBJECT, ARRAY, FUNCTION

let r= "a";
console.log('Ref x',x);

let q= x;
console.log(y);

x = "d";
console.log('Ref updated x',x);


console.log('Ref Again y',y);

//both are dependent.