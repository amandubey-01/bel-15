const fs = require('fs');

// create a readable stream with a highWaterMark.
const readableStream = fs.createReadStream('../input/leviathan.txt', {highWaterMark: 64*1024}) // 64 KB

// create a writable stream with a highWaterMark.
const writableStream = fs.createWriteStream('../output/outputPipedFile.txt', {highWaterMark: 16 * 1024}) // 16 KB

// Pipe the readable stream to writable stream.
readableStream.pipe(writableStream);

// Handle events.
readableStream.on('data', (chunk) => {
    console.log(`Read ${chunk.length} bytes`);
});

readableStream.on('end', () => {
    console.log(`Readable stream ended`);
});

writableStream.on('finish', () => {
    console.log('Writable stream finsihed');
});


// Handle errors
readableStream.on('error', (err) => {
    console.error('Error reading file', err);
});

writableStream.on('error', (err) => {
    console.error('Error reading file', err);
});