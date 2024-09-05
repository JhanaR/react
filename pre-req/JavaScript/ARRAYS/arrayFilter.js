//Filter is a Method of Array

//need to extract few data from the current array

const ages = [1, 33, 76, 40, 66];
let filter = ages.filter((value)=>{
    return value > 40
})
console.log('filter value',filter)
//output: [76, 66]


function checkAge(age) {
  return age >= 18;
}
const age = [1, 33, 76, 40, 66].filter(checkAge)

console.log('filter function',age)
//output:[33, 76, 40, 66] 

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

const newfilter = transport.filter((even)=>{
  return even.id % 2 == 0;
})
console.log('Array Filter index',newfilter)
//output:{id: 2, title: 'bus'} {id: 4, title: 'jeep'} {id: 6, title: 'scooter'}

