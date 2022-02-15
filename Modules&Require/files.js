const fs = require('fs');
// all asynchronous

// reading files ---> (relPath, Function)
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    // returns a buffer --> data
    console.log(data.toString());
})

// writing files ---> (relPath, data, Function)
// ---------- Updating existing file
fs.writeFile('./docs/blog1.txt', 'Hi I am fs Module', () => {
    console.log('written successfully');
})
// -------- New File
fs.writeFile('./docs/blog2.txt', 'Hell of a ride so far', () => {
    console.log('written successfully');
})

// directories
if (!fs.existsSync('./assets')) {         // Checks if the path exists
    fs.mkdir('./assets', (err) => {       // creating directory
        if (err)
            console.log(err);
        console.log('directory created');
    })
} else {
    fs.rmdir('./assets', (err) => {      // deleting directory
        if (err)
            console.log(err);
        console.log('directory deleted');
    })
}

// delete files
if (fs.existsSync('./docs/temp.txt')) {
    fs.unlink('./docs/temp.txt', (err) => {
        if (err)
            console.log(err);
        console.log('file deleted');
    })
}