const number = [1,2,3,4];

//Need to return only even number from number array.
let evenNum = number.filter(dum => dum%2 === 0)

console.log(evenNum)//output:2,4

//Need to return only even number from number array once number array is sum by 1

let evenSum = number.filter(dum=>
    {dum = dum+1
return dum%2 === 0})

console.log(evenSum)//output:1,

let userObj = [{userName:"Aila",age:31,salary:31000},
    {userName:"Baheera",age:32,salary:32000},
    {userName:"Caby",age:33,salary:33000},
    {userName:"Dency",age:34,salary:34000}
  ]

  //if use age is 32 then modify salary with adding 2000;

  let ageInc = userObj.filter(dum=>
    {
        if(dum.age === 32){
        dum.salary = dum.salary+2000;
    }
    return dum;
}
  )

  console.log(ageInc)//output:1,