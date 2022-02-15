const fs = require('fs');

// (path, options---> type of data returned ---> by default it is buffer)
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
// (path)
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// ---------------- longer way to write data from blog3 to blog4
// readStream.on('data', (chunk) => {
//     console.log("NEW CHUNK");
//     console.log(chunk);
//     writeStream.write('\n-----NEW CHUNK-----\n');
//     writeStream.write(chunk);
// })

// ---------- Piping
// pass data from a readable stream to a writable stream
readStream.pipe(writeStream)