// Example


// setTimeout(()=>{
//     console.log("Nested Timer");
//     Promise.resolve().then(()=>{
//         console.log("Resolved inner promise");
//     })
// },0);

// setTimeout(()=>{
//     console.log("Main Timer");
// },0);

// console.log("Main script");



//Example
// const dummy = () => {
//     console.log("Calling dummy");
//     dummy();
// }
// dummy(); 

// stack overflow --> infinte recursion calling


// Example

setTimeout(()=> {
    console.log("setTimeout inside I/O");
}, 0);

function recursiveNextTick() {
    console.log("Inside nextTick" + Math.round()*100);
    process.nextTick(recursiveNextTick);
}
recursiveNextTick();

Promise.resolve().then(()=>{
    console.log("Promise then");
});

console.log("Main script");

// recursiveNextTick is pushed to call stakc --> logs Inside nextTick random, then adds process.nextTick to 
// Next Tick Queue (NTQ) and logs Main script. Now even loop looks what else there. Finds process.nextTick -->
// adds to Call stack --> adds to (NTQ) --> again pushes to Call stack --> and this goes on and on.

