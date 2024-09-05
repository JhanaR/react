//When you want to iterate over each and evey element.
//map always return new array by performing action on original array.

const number = [1,2,3,4];

// let newNumber = number.map(function(element,index){
// return element*2
// }
// )
// console.log(newNumber);


//converting newNumber to arrow function

let doubleNumber = number.map(dum=>dum*2) // in order to see multiple outputs flower bracket is must and return key word is must.
console.log(doubleNumber);

let userObj = [{userName:"Aila",age:31,salary:31000},
                {userName:"Baheera",age:32,salary:32000},
                {userName:"Caby",age:33,salary:33000},
                {userName:"Dency",age:34,salary:34000}
              ]

//increase salary by 2000;

let increaseSalary = userObj.map(obje => obje.salary +2000);
console.log('increaseSalary',increaseSalary)
//out put: [33000, 34000, 35000, 36000]

let increaseSalar = userObj.map(obje => 
    {obje.salary +2000;
    obje});
console.log('increaseSalar',increaseSalar)//output :undefined if you return more values it must have return keyword in flower braces.


let increaseSala = userObj.map(obje => 
    {obje.salary  = obje.salary +2000;
    return obje});
console.log('increaseSala',increaseSala)
//output :
// 0: {userName: 'Aila', age: 31, salary: 33000}
// 1: {userName: 'Baheera', age: 32, salary: 34000}
// 2: {userName: 'Caby', age: 33, salary: 35000}
// 3: {userName: 'Dency', age: 34, salary: 36000}

