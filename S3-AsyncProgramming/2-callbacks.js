
//Library's code
const asyncFunction = (cb) => {
    setTimeout(()=>{
        console.log("In between");
        cb({course: 1, name: "JS"});
        cb();
    },1000);
}


// Developer code
const main = () =>{
    console.log("Start");
    asyncFunction((data)=>{
        console.log("End");
        console.log(data);
    });  
}
/*
A callback is simply a synchronous function passed as an argument to an asynchronous function, so the async function can call it 
later when the async work is done.

The callback itself is synchronous (a normal JS function).

It is registered with the async function.

The async function invokes it later when the async result is ready.
*/
main();

/* Where is the call back defined? Main, Developer owns the callback. However the execution of callback is in the control of 
 library's code and that could cause discrepancy. Maybe callback is called multiple times. That is the developer has no control 
 over it.
 We can pass the data using call back but we are at the mercy of the developer
*/