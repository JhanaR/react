//Map is a Method of Array

let array =[22,52,11,6,49,59,1];//using this array i need to form another array.


let map = array.map((value)=>{
    return value >42
})
console.log('Map value',map)
//output: [false, true, false, false, true, true, false]


const numbers = [1, 11, 22, 44];
const newArr = numbers.map(myFunction);

function myFunction(num) {
    return num * 10;
  }

  console.log('Array map fun',newArr)
  //output [10, 110, 220, 440]

  //object Array
const transport =[
    {id:1,title:"car"},
    {id:2,title:"bus"},
    {id:3,title:"van"},
    {id:4,title:"jeep"},
    {id:5,title:"bike"},
    {id:6,title:"scooter"}
  ]

  //requirement 1. need to return the value which is in title.

  const newTitle = transport.map((tit)=>{
    return tit.title;
  })
  console.log('Array map title',newTitle)
  //output:['car', 'bus', 'van', 'jeep', 'bike', 'scooter']

  //requirement 2. need to return the value which is in title with upper case.
  const newUpperTitle = transport.map((tit)=>{
    return tit.title.toUpperCase();
  })
  console.log('Array map title in upper case',newUpperTitle)
  //output:['CAR', 'BUS', 'VAN', 'JEEP', 'BIKE', 'SCOOTER']