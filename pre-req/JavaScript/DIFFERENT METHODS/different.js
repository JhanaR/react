let array =[26,42,11,66,4,59,31];


let sort =array.sort();
console.log('SORT',sort);
//output:[11, 26, 31, 4, 42, 59, 66]-sort method will do as per ASCII values

//reduce it will give up the result value.
let reduce = array.reduce((acc,value)=>{
    return acc*value
})
console.log('REDUCE',reduce);



//filter
let filter = array.filter((value)=>{
    return value > 40
})
console.log('filter value',filter)
//output: [42, 59, 66]



//map act on each and every value on array and return an array
let map = array.map((value)=>{
    return value >42
})
console.log('Map value',map)
//output: [false, false, false, false, false, true, true]

//map use
let mapUse = array.map((value)=>{
    return "&"+value;
})
console.log('Map Use',mapUse)

//output ['&11', '&26', '&31', '&4', '&42', '&59', '&66']




//find
let find= array.find((value)=>{
    return value > 60;
});
console.log('FIND',find);
//output 66, it will show the first result only.




