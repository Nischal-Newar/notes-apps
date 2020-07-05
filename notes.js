const fs = require('fs');
const style = require('chalk')

const listNotes = () => {
  const note = loadNotes();
  note.forEach(notes => {
    console.log(notes)
  });
}

const readNotes = (title) => {
  const note = loadNotes();
  const returnNote = note.find((notes) => notes.title === title)
  if(returnNote){
    console.log(style.green("Title: " + returnNote.title))
    console.log("Body: " + returnNote.body)
  }
  else{
    console.log(style.red("Title Not Found!"))
  }
  
};

const removeNotes = (title) =>{
  const note = loadNotes();
  const noteToKeep = note.filter((notes)=> notes.title !== title)
  if(note.length > noteToKeep.length)
  {
    saveNote(noteToKeep);
    console.log(style.green("Title " + title + " removed!"));
  }
  else {
    console.log(style.red("Title Not Found!"));
  }
}

const addNotes = (title,body) => {
  const note = loadNotes();
  const duplicateCheck = note.find((notes) => notes.title === title)

  if(!duplicateCheck){
    note.push({
      title: title,
      body: body,
    });
    saveNote(note);
    console.log(style.green("Title " + title + " saved!"));
  }
  else{
    console.log(style.red("Title Already Exists!"))
  }
};

const loadNotes = () => {
  try{
    const bodyBuffer = fs.readFileSync('notes.json');
    const jsonBody = bodyBuffer.toString();
    return JSON.parse(jsonBody);
  } catch(e){
    return [];
  }
};

const saveNote = (note) => {
  fs.writeFileSync('notes.json', JSON.stringify(note));
};

module.exports = {
  readNotes: readNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes
};