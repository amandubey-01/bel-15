// Task Queue: T1

// Example 1 Timer

// const main = () => {
//     setTimeout(() => { // T1
//         console.log("Main Timer");
//     },0);

//     console.log("Main script");
// }


//main();

// Example 2: Immediately Resolved Promise
// const main = () => {
//     Promise.resolve().then(()=>{ // again a async construct, the callback is pushed to the task queue and move the code
//         // execution and move code execution 1 step. Prints Main Scripts and once promise is resolved, which is
//         // still in task queue. It prints Promise Callback. 
//         console.log("Promise Callback");
//     })

//     console.log("Main script");
// }


// main();


// Example 3:Promise and Timer

// const main = () => {
    
//     setTimeout(() => { // T1
//         console.log("Main Timer");
//     },0);

//     Promise.resolve().then(()=>{ // P1
//         console.log("Promise Callback");
//     })

//     console.log("Main script");
// }


// main();



// Example 4: For loop in call stack.

// for (let i=0; i<10; i++){
//     setTimeout(()=>{ // T{i}
//         console.log(`Main Timer ${i}`);
//     },0);

//     Promise.resolve().then(()=>{ // P{i}
//         console.log(`Promise callback ${i}`);
//     });
// }



// Example 5: 

setTimeout(()=> {
    console.log("Main Timer")
},0);

Promise.resolve().then(()=> { //P1
    console.log("Promise Callback");
    Promise.resolve().then(()=>{ // P2
        console.log("Resolved inner Promise");
    })
})

console.log("Main script");




/*




main pushed --> starts executing from line 5: Finds setTimeout, picks it and put it in task queue. ---> moves to line 8 ---
---> moves to line 9: Find synchronous code executes it and print "Main Script" ---> Moves line 10: end of function and 
main is now moved out of call stack. 
Current position of call stack ---> empty
Event loop plaed T1 to call stack -- T1 = () => { // T1
        console.log("Main Timer");
    } Time out is taken care by Task Queue
Prints Main Timer


Call Stack
----------------------------------------------

Task Queue: (T1,0). This is a leftover part of the program.
After appropriate milliseconds are exhausted. It is ready to be executed. Task queue's repsonisbility to ensure that the 
function is ready to be executed.

Event Loop: It is a just a infinte while loop, while(true), running forever.
It has just one responsibility.
* Check if some function is ready to be executed (if yes).
* Check if call stack is empty. (if yes)
* Pick the most relevant function  and schedule it on the call stack. Removes it from Task Queue and puts it in call stack.


Output
Main Script
Main Timer





*/