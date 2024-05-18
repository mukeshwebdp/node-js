const fs = require('fs');

// asynchronous read methods
console.log('read start');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
console.log('read close');

// synchronous methods 

console.log(``);
const data = fs.readFileSync('input.txt',)
console.log(`start sync: ${data.toString()}`);

fs.writeFile('input.txt', 'Hello! ',function(error){
    if(error){
        console.log('error throw in writeFile:',error);
    }else{
        console.log('write file successful');
    }
})

fs.appendFile('input.txt','My name is Mukesh',function(err){
    if(err){
        console.log(`appendFile error: ${err}`);
    }else{
        console.log(err);
    }
})
// file delete 
fs.unlink('input.txt',function(err){
    console.log(err);
})