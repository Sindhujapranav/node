const fs = require('fs');//file system to create file read append text to a file method
const os = require('os'); // os of your system can be accessed
const express = require('express');
const timestamp = require('./timestamp.js')

var file = timestamp.filename;
console.log(file)

fs.appendFile(`a.txt`, `Hello ${file}`, (err) => {
    if (err) throw err;
    console.log("time appended");
});
const app = express();

app.get('/', (req, res) => {
    res.send(`${file}`)
})

app.listen(3000);


