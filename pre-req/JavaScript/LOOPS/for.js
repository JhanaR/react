//initialization, condition, increment/decrement step should be in organized way so its more meaniful than while
//i want to print 1 to 10 using

//FOR LOOP
// for(let j=0; j<=3; j++){
//   console.log(j);
// }


let obj = {
  name: "heva",
  age: 3,
  hobbies: "playing"
}


// // //FOR IN
for(let prop in obj)
{
  //console.log(obj.name);
  // console.log(prop + ":" ,  prop);//value of properties
  console.log(prop, obj[prop]);//value of properties

}

//FOR OFF
for(let prop of Object.keys(obj))
{
  //console.log(obj.name);
  // console.log('prop', prop);//properties
  console.log(prop, obj[prop]);//value of properties
}




//  let arr =["apple", "ball", "cat"];

//FOR



//FOR OFF
// for(let prop of arr){///its simple
//   //  console.log('prop', prop);//value in properties
//   console.log(arr + ":", prop[arr]);//value in properties
//   }

// //FOR IN

// for(let prop in arr){///its simple
//     // console.log('prop', prop);//index in properties
//    console.log(arr + ":", prop[arr]);//value in properties
//   }





