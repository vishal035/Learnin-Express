const tasks = {
    tasks: [{
        text: 'Grocery Shopping',
        completed: true
    },
    {
        text: 'Clean Yard',
        completed: false
    },
    {
        text: 'Film Course',
        completed: false
    }],
    getTasksToDo() {
        return incompletedTasks = this.tasks.filter((tasks) => tasks.completed === false);
    }
}



console.log(tasks.getTasksToDo())


































// const fs = require('fs');
// const book = {
//     title: "History",
//     description: "Nothing Here"
// }

// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// fs.writeFileSync('books.json', bookJson);

// console.log(JSON.parse(bookJson).title);


// const dataBuffer = fs.readFileSync('books.json');
// const dataJason = dataBuffer.toString();
// const data = JSON.parse(dataJason);
// console.log(data);

// data.name = "Vishal Kumar"
// data.age = 21

// console.log(data);

// const dataEdited = JSON.stringify(data);
// fs.writeFileSync('books.json', dataEdited);


// const dataBuffer1 = fs.readFileSync('books.json');
// const dataJason1 = dataBuffer1.toString();
// const data1 = JSON.parse(dataJason1);
// console.log(data1.name);

// const square = (x) => x*x;
// console.log(square(2));

// const objectss = {
//     name: "Birthday Party",
//     guestList:["Vishal", "Honey", "Alice"],
//     print: function () {
//         // const that = this
//         console.log("Guest List For "+ this.name);

//         this.guestList.forEach( (guest) => {
//             console.log(guest + " is invited in "+ this.name);
//         })
//     }
// }

// objectss.print();