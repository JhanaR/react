//Certainly! A callback function in JavaScript is a function that is passed into another function as an argument to be executed later.
// INTRO
// setTimeout(()=>{
// console.log('After 3 sec only');

// },3000)


// Some try
// function myFirst(name) {
//     const myName = name.toUpperCase()
// console.log('First function is called' + myName)
// setTimeout(()=>{
//     console.log('set-timeout', myName)
// },5000)
// }

// myFirst('heva');



// another try
// function handleAnother(myName) {
//     console.log('handleAnother', myName)
// }


// function myFirst(name) {
//     const myName = name.toUpperCase()
// console.log('First function is called' + myName)

// setTimeout(handleAnother,3000,myName)
// }

// myFirst('heva');


// Another try with time delay
// function handleAnother(myName) {
//     console.log('handleAnother', myName);

//     setTimeout(()=>{
//         console.log('after 6000 da!!')
//     },6000)
// }


// function myFirst(name, callBack) {
//     const myName = name.toUpperCase()
// console.log('First function is called' + myName)
// callBack(myName)
// }

// myFirst('heva', handleAnother);

// ASSIGNMENT

// function handleAnother(myName) {
//     console.log('handleAnother', myName);

//     setTimeout(()=>{
//         console.log('after 6000 da!!')
//     },6000)
// }


// function myAssignment(name) {
//     const myName = name.toUpperCase()
// console.log('Hello ' + myName)

// setTimeout(()=>{
//     console.log('I ' + myName + 'I am a doctor')
// },2000)

// setTimeout(()=>{
//     console.log( myName + 'You will be alright')
// },4000)
// }

// myAssignment('heva');


function myAssignment(callback) {

setTimeout(()=>{
    console.log('I am a doctor')
    callback()
},2000)

}

function myAssignment1() {
setTimeout(()=>{
    console.log( 'You will be alright')
},2000)
}

myAssignment(()=>myAssignment1());

            // Another

// function first(callback) {
//     setTimeout(() => {
//         console.log('running: first')
    
//         callback()
//     }, 3000)
//     }
    
//     function second(callback) {
//     setTimeout(() => {
//         console.log('running: second')
    
//         callback()
//     }, 3000)
//     }
    
//     function third() {
//     setTimeout(() => {
//         console.log('running: third')
//     }, 3000)
//     }
    
//     first(() => second(() => third()))