// let array1 = [10, 20, 30];
// console.log(array1);

// //employee

// let employee1 = ['Ajay', 35, 7500.99, true];
// console.log(employee1);

// //length
// let personAges = [25, 22, 45, 50];
// for (let i = 0; i < personAges.length; i++) {
//     if (personAges[i] % 2 == 0) {
//         console.log(i, " personAges ---- ", personAges[i]);
//     }
// }
// //modify
// personAges[1]=23;
// console.log(personAges);

// const personAges = [25,22,45,50,45,20,60];
// personAges[5]=55;

// console.log(personAges);

// personAges = [25,40,32,80];

// let items = [250,500];
// // ADD REMOVE
// items.push(100);
// console.log(items);
// items.pop();
// console.log(items);
// items.unshift(120);
// console.log(items);
// items.shift();
// console.log(items);


// let arrayA = [250,500];
// let arrayB = [150,500];

// arrayA= arrayA.concat(arrayB);
// console.log(arrayA);

// arrayA.sort();
// console.log(arrayA);
// arrayA.reverse();
// console.log(arrayA);

// console.log(arrayA.toString());
// console.log(arrayA);

// let firstArray = [10,20,30,40,50,10,20,30,10,50,90];

// //sub array from firstArray

// console.log(firstArray.slice(3,6)); // 
// let firstSubArray = firstArray.slice(3,6);
// console.log(firstArray);

// // indexOf
// console.log("index of -------",firstArray.indexOf(10)); // 0
// console.log("index of -------",firstArray.lastIndexOf(10)); // 8

function show(element){
    console.log(element);
}

function doSomething(){
   var printArray = [10,20,30,40,50,10,20,30,10,50,90];
//    printArray.forEach(show);
   printArray.forEach((element) => {
    console.log(element);
   })
}
//doSomething();


var numbers = [10,20,30,40,50,60];

// add + 2 to all 

// numbers.map(function(num){
//   num = num+2;
// });
// var result = numbers.map((num) => num+2);
// console.log(result);

// var result1= numbers.reduce((a,b) => a+b);
// console.log(result1);

// var result2 = numbers.filter(num => num>35);
// console.log(result2);

//Adding elements 1,2,3 from 0 index 
//= 1 2 3 10 20 30 40 50 

numbers.splice(0,0,1,2,3);

console.log(numbers);

// 30 40  
numbers.splice(5,2);
console.log(numbers);

        let a = 10;
		let b = true;
		let c = 'Apple';
		let array1 = [a,b,c] // array packing 
		array1[0];
		//unpacking 
		var x , y , z;
		[x,y,z]= array1;
        console.log(x);
        console.log(y);
        console.log(z);
        console.log(array1);

