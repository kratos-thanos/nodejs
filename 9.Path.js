const path = require('path')


const filePath = path.join('/content' , 'subfolder', 'test.txt')

console.log(filePath);


const base = path.basename(filePath)
console.log(base);

const absolut = path.resolve(__dirname)
console.log(absolut);


console.log(path.delimiter);