const {Transform} = require('stream');
const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt', {encoding: 'utf-8'});
const writableStream = fs.createWriteStream('../output/transformedLeviathan.txt');

// usecase -- the first character of your line must be a uppercase.
/*
One approach is that we can read the file entirely and bring that file into memory, break it line by line and then make the 
first character uppercase. Possible but highly inefficient.

Other approach is that while reading the file we can transform it and write it the destination file.
*/

const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

readableStream.pipe(uppercaseTransform).pipe(writableStream);

// housekepping methods.

readableStream.on('data', () => {
    console.log("Reading the chunk started");
});
readableStream.on('end', () => {
    console.log("Reading ended");
});
writableStream.on('finish', () => {
    console.log("Writing finished ");
});

readableStream.on('error', (err) => {
    console.error("Error while reading");
});

writableStream.on('error', (err) => {
    console.log("Error while writing");
});
