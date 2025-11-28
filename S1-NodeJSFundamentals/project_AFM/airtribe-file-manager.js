const fs = require('fs');

const inputFile = "/home/aman-dubey/airtribe_nodejs/bel-15/S1-NodeJSFundamentals/project_AFM/AFM-source/input.txt";
const outputFile = "/home/aman-dubey/airtribe_nodejs/bel-15/S1-NodeJSFundamentals/project_AFM/AFM-destination/output.txt"; 

// 1️⃣ Read Sync, Write Sync
function sync_sync(input, output) {
    const data = fs.readFileSync(input, 'utf-8');
    fs.writeFileSync(output, data);
    console.log("File read synchronously and written synchronously");
}

// 2️⃣ Read Sync, Write Async
function sync_async(input, output) {
    const data = fs.readFileSync(input, 'utf-8');
    fs.writeFile(output, data, (err) => {
        if (err) throw err;
        console.log("File read synchronously and written asynchronously");
    });
}

// 3️⃣ Read Async, Write Sync
function async_sync(input, output) {
    fs.readFile(input, 'utf-8', (err, data) => {
        if (err) throw err;
        fs.writeFileSync(output, data);
        console.log("File read asynchronously and written synchronously");
    });
}

// 4️⃣ Read Async, Write Async
function async_async(input, output) {
    fs.readFile(input, 'utf-8', (err, data) => {
        if (err) throw err;
        fs.writeFile(output, data, (err) => {
            if (err) throw err;
            console.log("File read asynchronously and written asynchronously");
        });
    });
}

sync_sync(inputFile, outputFile);
sync_async(inputFile, outputFile);
async_sync(inputFile, outputFile);
async_async(inputFile, outputFile);
