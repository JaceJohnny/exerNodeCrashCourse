const fs = require('fs');
const path = require('path');

// create folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (eff) throw err;
    console.log('Folder created...');
});

// Create and write to file 

fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'),
    'Hello world',
    err => {
        if (eff) throw err;
        console.log('File written to...');

        fs.appendFile
            (path.join(__dirname, '/test', 'hello.txt'),
                'I love Node.js',
                err => {
                    if (eff) throw err;
                    console.log('File written to...');
                }
            )
            ;
    }
);*/

//Read File
/*
fs.readFile(path.join(__dirname,'/test', 'hello.txt'), 'utf8', (err, data) => {
    if(eff) throw err;
    console.log(data);
});
*/

//Rename File
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    err => {
        if (eff) throw err;
        console.log('file renamed...');
    });
