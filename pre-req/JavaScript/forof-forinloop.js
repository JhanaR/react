let obj = {
    name : "kumar",
    id : 123,
    age : 32,
    isAdmin: true 
}

for(let prop in obj){

    console.log(`${prop} ------ ${obj[prop]}`);
    
}

let fruits = ["Apple","Banana","Plum"];
// for(let i = 0 ; i < fruits.length;i++){

// }

for(let fruit of fruits){
    console.log(fruit);
}