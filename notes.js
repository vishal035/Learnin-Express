const fs = require('fs');
const chalk = require('chalk');

const getNotes = ()  => {
    return "Your Notes...!";
}


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title )

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.blueBright("Note Added"));

    } else {
        console.log(chalk.redBright("Note of this title is already exsist..!"));
    }
}


const removeNote = (title) => {
    const notes = loadNotes()

    const leftOverNotes = notes.filter( (note) => note.title !== title )
    

    if(leftOverNotes.length < notes.length){
        console.log(chalk.greenBright.inverse("Note has been removed..!"));
        saveNotes(leftOverNotes);
    }else{
        console.log(chalk.redBright.inverse("Found Some Error While Removing the notes..!"));
    }

}


const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};