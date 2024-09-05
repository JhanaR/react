var Name = prompt("Enter your name");
console.log("My name is:", Name);

try{
    if (Name === "") 
        throw "Name cannot be empty"
    if (Name.length <   5) 
        throw "Name should be atleast 5character"
    if (!isNaN(Name))
        //if (isNaN(Name) === false)  
        throw "Enter Your name"
    console.log("My name is:", Name);
}
catch(error){
    console.log("error:", error);
}

// var num = prompt("Enter any number");
// console.log(num);

// try {
//     if (isNaN(num))
//         throw "Enter valid number"
//     console.log("My name is:", num);
// }
// catch(error){
//     console.log("error:", error);
// }
