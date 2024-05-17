const { log } = require('console');
const path = require('path')
console.log(`windows separater : ${path.sep}`);// separeter /  \

// console.log(process.env.path);

console.log(`delimiter : ${path.delimiter}`); // delimiter depend on your mechine that can print : or ;

const currentPath = __filename; // print current file path address.
const currentDirectory = __dirname

console.log(`Current file path address : ${currentPath}`);
console.log(`Current directory path address : ${currentDirectory}`);

const baseName = path.basename(currentPath)  // only print file name
const baseNameWithoutExe = path.basename(currentPath, '.js')  // only print file name without extensions
console.log(`File name: ${baseName}`);
console.log(`File name without extenstions : ${baseNameWithoutExe}`);

const dirName = path.dirname(currentPath) // print directory path   

console.log(dirName);

const exe = path.extname(currentPath) // 

console.log(`current file extension : ${exe}`);

const pathFormater = path.format({
    dir: `home${path.sep}about${path.sep}indexHome`,
    base: 'index.js'
})       
console.log(pathFormater);

const dam = path.parse(currentPath)
console.log(path.normalize(dam.dir));// unwanted separater remover