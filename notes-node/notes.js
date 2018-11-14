/*
** Notes.js
*/

const argv = require ('yargs').argv;
const fs = require ('fs');
//Require SYS



var getNoteCommand = () => {
if (argv.noteCommand === 'add')
    addNote(argv.title, argv.id, argv.body);
else if(argv.noteCommand === 'list') {
    var allnotes = listNote();
    console.log(`Printing all ${allnotes.length} note(s)`);
    allnotes.forEach((notes) => logNote(notes));
}
else if (argv.noteCommand === 'remove')
    removeNote(argv.id);
else if (argv.noteCommand === 'read') {
    var note = readNote(argv.id);
    if (note) {
        logNote(note);
    } else
        console.log('No match found.')
}
else
    console.log('Command not recognised');
};

var fetchNote = () => {
    try {
        var noteString = fs.readFileSync('notes.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

var saveNote = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

var logNote = (note) => {
    console.log('Note found');
        console.log('---');
        console.log(`ID: ${note.id}`);
        console.log(`TITLE: ${note.title}`);
        console.log(`BODY : ${note.body}`);
};

var addNote = (title, id, body) => {
    var noteArr = fetchNote();
    var noteObj = {
        title: title,
        id: id,
        body: body
    };
    var duplicateNotes = noteArr.filter((noteObj ) => noteObj.id === id);

    if (duplicateNotes.length === 0) {
        noteArr.push(noteObj);
        saveNote(noteArr);
    }
};

var listNote = () => {
    return fetchNote();
};

var readNote = (id) => {
    var arrNote = fetchNote();
    console.log(arrNote);
    var filterNote = arrNote.filter((note) => note.id === id);
    return filterNote[0];
};

var removeNote = (id) => {
    var arrNote = fetchNote();
    var filterNote = arrNote.filter((note) => note.id !== id);
    saveNote(filterNote);
};

module.exports = {
    getNoteCommand
};