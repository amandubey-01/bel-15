// Example 1:Timer and nextTick

// const main = () => {
    
//     setTimeout(() => { // T1
//         console.log("Main Timer");
//     },0);

//     process.nextTick(() => console.log('process.nextTick')); //NT always goes to microTQ

//     console.log("Main script");
// }


// main();

// Example 2: NextTick and Promises
// const main = () => {

//     Promise.resolve().then(()=> {
//         console.log("Promise Callback");
//     })
    
//     setTimeout(() => { // T1
//         console.log("Main Timer");
//     },0);

//     process.nextTick(() => console.log('process.nextTick')); //NT always goes to microTQ
    
//     console.log("Main script");
// }

// main();


// Example 3:

setTimeout(()=>{
    console.log("Main Timer");
},0);

process.nextTick(() => console.log('process.nextTick 1'));

Promise.resolve().then(() => {
    console.log('Promise Callback 1');
});

process.nextTick(() => console.log('process.nextTick 2'));

Promise.resolve().then(() => {
    console.log('Promise Callback 2');
});

console.log("Main script");

