const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt',{encoding: 'utf-8', highWaterMark: 1 * 512}); 
// create a readableStream

// This reading is different than fs.readFile or readFileSync as these read file in entriety. You just read the entire
// content and make it available in the memory. If it is very large you waste a lot of memory. Depending on the context 
// we can use readFile, readFileSync or readStreams. 

// Streams work differently, as it reads data in chunks, and once chunk is read it emits an event. That the read content is
// ready for further processing.


// highWaterMark: 1* 1024. basically defines chunk size here it is 1 KB.

readableStream.on('data', (chunk) => {
    console.log("$$Received chunk$$", chunk);
});

readableStream.on('end', () => {
    console.log("---------------------------------------------------");
    console.log("No more data to read");
});

readableStream.on('error', (err) =>{
    console.log("Error Reading file", err);
});


