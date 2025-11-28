const asyncFunction1 = (cb) => {
    setTimeout(()=> {
        console.log("Async Function 1");
        cb();
    },1000);
};

const asyncFunction2 = (cb) => {
    setTimeout(()=> {
        console.log("Async Function 2");
        cb();
    },1000);
};

const asyncFunction3 = (cb) => {
    setTimeout(()=> {
        console.log("Async Function 3");
        cb();
    },1000);
};

// We want that the execution order for these to be asyncFunction1, asyncFunction2, then asyncFunction3.
const main = () => {
    asyncFunction1(() => {
        asyncFunction2(() => {
            asyncFunction3(() => {
                console.log("All Async Function completed");
            });
        });
    });
};

main();