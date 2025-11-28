// Async Await

const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Asycn Function 1 called");
            resolve(1)
        }, 2000);
    })
}   

function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Asycn Function 2 called");
            resolve(2)
        }, 2000);
    })
}

const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Asycn Function 3 called");
            resolve(3)
        }, 2000);
    })
} 
// await is not supported by some nodejs await at the top level
 // await asyncFunction1(); ---> it worked here, but depends on the nodeJS version

// const main = async () =>{
//     const response = await asyncFunction1() // behaves as if you call then of the promise
//     // await gives us the resolved value, what if there are rejects 
//     console.log(response);
// }

const main = async () => {
    // let response;
    // try {
    //     response = await asyncFunction1();
    //     console.log(`Resolved ${response}`);
    // } catch(e){
    //     console.log(`Rejected ${e}`);
    // }

    const r1 = await asyncFunction1();
    const r2 = await asyncFunction2();
    const r3 = await asyncFunction3();

    console.log(r1,r2,r3);  
    
}

main();