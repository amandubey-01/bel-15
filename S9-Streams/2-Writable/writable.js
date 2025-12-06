const fs = require("fs");

const writeableStream = fs.createWriteStream('../output/largeResponse.txt');

for (let i = 0; i < 1000000; i++){
    writeableStream.write("Hello World: " + i);
    writeableStream.write("\n");
};

writeableStream.end(() =>{
    console.log('Finsihed writing to file.');
});

// Handle error event
writeableStream.on('error', (err) => {
    console.log("Error writing to file", err);
});