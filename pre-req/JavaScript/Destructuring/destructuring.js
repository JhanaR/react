//Destructuring of Objects and Arrays,, extracting the proper from an object and assigning to the variable.

let baby = {
name : "bhuva",
age: 3,
hobby: "imsai",
address: "thandalam"
}
console.log(baby);//object return
console.log(baby.name,baby.age,baby.hobby )//specific key return
// to access the key name it needs to call baby.name..
//inorder to acces more than 10 times, we have an option called destructing.

//const { name, age, hobby } = baby; //always key name and variable name should be same.
//internally it takes up like baby.name.. baby.age, baby.hobby
//While destructuring we should provide deafault value but never be a part of the object.

const {name, address="chennai"} = baby;
const addresss = baby.address === undefined ? defaultValue :baby.address
console.log('address',address);
//const varName = condition ? "if true will execute " : "if false will execute"



let Array =["first", "second"]

const[first,Second] = Array;//desctructing of array


//SPREAD

const spread = ["I", "AM", "Heva"];

//Getting new array with the existing array values but not same array
const newSpread = [...spread];

console.log('spread', spread);



