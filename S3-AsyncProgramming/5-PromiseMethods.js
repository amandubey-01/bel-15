
const asyncFunction1 = () => {  
    return new Promise((resolve, reject) => {
        setTimeout(()=>{        
            console.log("Async Function 1 called");
            resolve(1);
        },2000);
    })
}

const asyncFunction2 = () => {  
    return new Promise((resolve, reject) => {
        setTimeout(()=>{        
            console.log("Async Function 2 called");
            reject(2);
        },1000);
    })
}

const asyncFunction3 = () => {  
    return new Promise((resolve, reject) => {
        setTimeout(()=>{        
            console.log("Async Function 3 called");
            resolve(3);
        },5000);
    })
}

// We want to execute all 3 async Functions parallelly. -----> Promise.all([all the async Functions you want to return])

const main = () => {
    const res = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]) // Now only this promise remains pending.
    
    //const res = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()])
    /*
    Similar to Promise.all(), but in Promise allSettled it executes all the promise and gives response based on it is
    a success or failure and then we can make a call.
    */

    // const res = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()])

    //const res = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()])


    res
        .then(value => console.log(`Successful Promise: ${value}`)) /* even this is ahead, the console.log(res) is executed as resolves queues the 
    .then() callback in the microtask queue and current function keeps executing normally.
    */
        .catch(reason => console.log(`Rejected Promise: ${reason}`))
        .finally(() => console.log("Edge cases handled successfully")); // the finally is attached to the new created promise
        // in this one it is attached to Promise.all()
    console.log(res); // Promise.all gives single promise so output is single pending promise.

    
}
main();  

