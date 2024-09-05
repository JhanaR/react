// //synchronous
// console.log("one"); //1
// console.log("two"); //2
// console.log("three"); //3

// //asynchronous code
// console.log("====================");
// console.log("one");  //1
// setTimeout(() => console.log("two"),1000); //3
// console.log("three"); //2

function serverRequest(query, callback){ // callback

   setTimeout(function(){
     //definition
     let response = query + " full";
     callback(response); //calling function 
   },3000)
}
function getResults(response){
    console.log("The server response is "+response);
}
console.log("before call back event");
serverRequest(" The glass is half ",getResults);
console.log("after call back event");
console.log("after call back event1");
console.log("after call back event2");
console.log("after call back event3");