//Requirement:1 Need to form new array by removing last 2 values from current 
//using SPLICE

const transport =['car','bus','van','jeep','bike','scooter']

const splice =transport.splice(2,2);//Removal --- splice(from which index, how many delete)

console.log('splice',splice);
//output ['van','jeep']

//Requirement:1 Need to form new array by removing 2 values from current array
//using SLICE
const vehicles =['car','bus','van','jeep','bike','scooter']

const slice =vehicles.slice(2,3);//Removal --- splice(from which index, how many elements)

console.log('slice',slice);
//output ['car','bus']

//using CONCATE

const number = [1,2,3,4]


//joining an array
const join = transport.concat(vehicles,number);// in concat(we can define n number of arrays separated with comma

console.log('JOIN', join);

//FIND INDEX
const vehi =[
    {id:1,title:"car"},
    {id:2,title:"bus"},
    {id:3,title:"van"},
    {id:4,title:"jeep"},
    {id:5,title:"bike"},
    {id:6,title:"scooter"}
  ]

  const findIndex = vehi.findIndex((val)=>{
    //return val.id == 2;
    return val.title == "van";
  })

  console.log('findIndex',findIndex);
  //OUTPUT: index value

//FIND
const vehic =[
    {id:1,title:"car"},
    {id:2,title:"bus"},
    {id:3,title:"van"},
    {id:4,title:"jeep"},
    {id:5,title:"bike"},
    {id:6,title:"scooter"}
  ]

  const find = vehi.find((val)=>{
    //return val.id == 2;
    return val.title == "van";
  })

  console.log('find',find)

    //OUTPUT: object will return