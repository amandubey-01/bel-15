const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt', {highWaterMark: 64*1024} );
const writableStream = fs.createWriteStream('../output/backpressureFile.txt', {highWaterMark: 128*1024});

readableStream.on('data', (chunk) => {
    console.log(`Read ${chunk.length} bytes`);
    const canWrite = writableStream.write(chunk); /* When this command runs the chunk is pushed to the writableStream buffer, 
    once pushed it will write but also gives the information about the buffer state. true --> can accept more data
                                                                                     false --> can't accept more data
    */

    if (!canWrite){
        console.log("Writable stream full. Pausing for a moment");
        readableStream.pause() 
    }
    // console.log('Has written',canWrite)
})

writableStream.on('drain', () => {
    console.log("Writable stream empyt. Resuming readable stream");
    readableStream.resume();
})

// Housekeeping methods.

readableStream.on('end', () => {
    console.log('Readable stream ended');
    writableStream.end();
});

readableStream.on('error', (err) => {
    console.error('Error reading file ', err);
});

writableStream.on('error', (err) => {
    console.error('Error wirting file ', err)
})

/*
<----------  What you assumed   ---------------->

If readable chunk size is bigger than writable chunk size → backpressure
If readable chunk size is smaller → no problem

That logic seems intuitive… but it’s not correct.
Because chunk size is NOT the same thing as throughput.

<----------------- What’s actually happening --------->

highWaterMark = internal buffer capacity, not chunk size

Stream chunk size ≠ buffer capacity
A readable stream can read faster than writable can write
Even if writable has a bigger highWaterMark
So:
    Readable: { highWaterMark: 64 KB }
    Writable: { highWaterMark: 128 KB }

You think:

Writable is DOUBLE the size — so it should handle data!

But readable stream keeps pushing data without waiting.
Writable stream may not process fast enough.

So writable’s buffer fills up → triggers:
    backpressure
Readable must then pause until writable drains.

<----------------- Real Cause of Backpressure -------------------->

Backpressure occurs when:
    Data consumption rate < Data production rate
Not when:
    bufferA < bufferB

Example in your case:

Property	                    Readable                Stream	Writable Stream
Buffer size	                    64 KB	                128 KB
Speed (actual processing)	    Fast file read	        Slow disk write

Readable → floods data
Writable → can’t keep up → backpressure happens 
Even though writable has a bigger buffer!

<------------------ Key takeaway ------------------>
    Backpressure happens because of speed mismatch, not buffer size mismatch.


Backpressure triggers when:
    WritableStream.write() returns false
Readable must call:
    readable.pause()
and wait for:
    'wdrain' event → writable.ready → readable.resume()

TL;DR
    highWaterMark controls buffer capacity
    Backpressure is about rate, not size
    Even a larger writable buffer can overflow if writable is slower
*/