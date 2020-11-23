const fs = require('fs');
// const book = {
//     title: "History",
//     description: "Nothing Here"
// }

// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// fs.writeFileSync('books.json', bookJson);

// console.log(JSON.parse(bookJson).title);


const dataBuffer = fs.readFileSync('books.json');
const dataJason = dataBuffer.toString();
const data = JSON.parse(dataJason);
console.log(data);

data.name = "Vishal Kumar"
data.age = 21

console.log(data);

const dataEdited = JSON.stringify(data);
fs.writeFileSync('books.json', dataEdited);


const dataBuffer1 = fs.readFileSync('books.json');
const dataJason1 = dataBuffer1.toString();
const data1 = JSON.parse(dataJason1);
console.log(data1.name);