// Example 1:
// console.log('Start');
// console.log("In between");
// console.log("End");

// Example 2:
// const inBetween = () =>{
//     console.log("In between");
// }

// console.log("Start");
// setTimeout(inBetween, 0);
// console.log("end");

// setTimeout --> in a manner node js function that defers the execution by t milliseconds

// Example 3:
const inBetween = () =>{
    console.log("In between");
}

console.log("Start");
setTimeout(inBetween, 1000); // it will atleast take 1000ms never before than that, since sync executes before async and if 
// sync takes more time or never completes then it can take more time.
console.log("end");
