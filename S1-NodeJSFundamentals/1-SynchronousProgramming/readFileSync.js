const fs = require('fs'); // Import

const filePath = "../input/leviathan.txt";

console.log(`${Date.now()} Started Reading File`);

const data =  fs.readFileSync(filePath, 'utf-8');

console.log("File reading complete. Length of the file is ", data.length)


console.log(`${Date.now()} Finsihed Reading File`); // 8 ms

