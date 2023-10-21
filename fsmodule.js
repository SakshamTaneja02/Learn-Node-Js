const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err,data);
// })

// const a = fs.readFileSync('file.txt');
// console.log(a);
// console.log(a.toString());

// fs.writeFile("file2.txt", "Hello", ()=>{
//     console.log("Done");
// })

const b = fs.writeFileSync("file2.txt", "Hello2");
console.log(b);
 
console.log("yoo");