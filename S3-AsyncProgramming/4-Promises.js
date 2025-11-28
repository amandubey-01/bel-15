// Why Promises?
/*
- Clean and manageable async code. 
- Avoid callback hell.
*/

// const asyncFunction1 = (cb) => {  ---> In promise we do not depend on this callback. 
//     setTimeout(()=>{
//         console.log("Async Function 1 called");
//         cb()
//     },1000);
//     return {something: true}; //// 
// } // although it returned something but it did not capture the essence of promise, it did not commit some data in the
// future. We are not holding onto somepart.

// In promise the structure of async function is changed a bit, now we do not depend on the callback.  
// In promise we return something but it is not a classical object {something: true}
// with promises two sceanrios are possible either will give some data or will error out.
// Hence promises take two parameters resolve and reject.


//Promise: Pending
//Give me response
//Error out

const asyncFunction1 = () => {  
    return new Promise((resolve, reject) => {
        setTimeout(()=>{        
            console.log("Async Function 1 called");
            reject("Async function 1 failed");
        },1000);
    })
}

const asyncFunction2 = () => {  
    return new Promise((resolve, reject) => {
        setTimeout(()=>{        
            console.log("Async Function 2 called");
            reject("Async function errored out");
        },1000);
    })
}

const asyncFunction3 = () => {  
    return new Promise((resolve, reject) => {
        setTimeout(()=>{        
            console.log("Async Function 3 called");
            resolve();
        },1000);
    })
}
// Order of execution we desire function 1, then function 2 and then at end function 3.

/* then --> any action that needs to be done on the successful completion of promise, used when you execute
on the resolve part of the promise
*/
/* catch --> any actoin that needs to be done on the failure of a promise, used when you execute on the reject part of the
promise
*/
const main = () => {
    
    // asyncFunction1()
    //     .then(() => {
    //         asyncFunction2()
    //             .then(() => {
    //                 asyncFunction3()
    //                     .then(() => console.log("All async Function completed execution"));
    //             })
    //     })  --> This works but it is similar to callbacks, doesnot solve the problem of callback hell, drifring right.
    // Promises gives another way for running the same code ---> Promise Chaining.

    // Promise Chaining
    asyncFunction1()
        .then(asyncFunction2)
        .catch((e) => console.log(e)) // When the async functions fails it looks for the nearest catch block, and skips all
        // the then() in between
        .then(asyncFunction3)
        .then(() => console.log("All async Function completed execution"))
        .catch((e) => console.log(e)); //If this is the only catch block it will not execute further code after 
        // asyncFunction2


    // const res = asyncFunction1()    
    //     .then(()=> console.log("Promise Resolved"));
    // console.log(res); // first this is executed --> promise pends, then the after 1s async function is called,
    //  then the resolve that is the then part is printed
}
main();  


// 5 sec IO time 4.5 sec, CPU time 0.5 sec 

// single core system
// Sync Execution: Your thread will be blocked for 5 sec ==> 0.2 req / sec
// Async Execution: Thread would be blocked for 0.5 sec ==> 2 req / sec
