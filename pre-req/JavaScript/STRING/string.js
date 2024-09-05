//string: Group of characters

let str1 = "I am first string";
let str2 = "I am Second string";
let str3 = "I am Hevanika";

let output = str1 + str2;
console.log("log of output:",output);

let output1 = str1.concat(str2);
console.log("log of output1:",output1);

let output2 = str1.concat("!@#$%", str2);
console.log("log of output2:",output2);

//partitioning of string

// slice(start,end);
// substr(start,end);
// substring(start,length);

str1.slice(2,6);// am f---(from 4th index to 10th index)

str2.slice(2);// 'am Second string'

str3.slice(-2);// ka



str1.substr(2,6);//( from index 2 to 6 positions )

str2.substr(2);
console.log("log of str2:",str2);