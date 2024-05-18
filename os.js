const os = require('os');
console.log(os.arch());// find machine archtecture : x64;

console.log(`free memory : ${os.freemem()}`); // find free memory : 400GB;
console.log(`total memory: ${os.totalmem()}`);// find total memory : 5000GB
console.log(`pc default path ${os.tmpdir}`); // find default path 
console.log(`network interface ${JSON.stringify(os.networkInterfaces())}`);