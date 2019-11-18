const fs = require('fs');
const path = require('path');

//create folder
/* fs.mkdir(path.join(__dirname, './test'), {}, err=>{
    if(err) throw err;
    console.log('folder created');
}); */

//create and write to file and append
fs.writeFile(path.join(__dirname, './test','hello.txt'), 'hello world', err=>{
    if(err) throw err;
    console.log('File written');
    fs.appendFile(path.join(__dirname, './test','hello.txt'), 'i love node', err=>{
        if(err) throw err;
        console.log('File written');
    });
});

