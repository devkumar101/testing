import React, { useState } from 'react';
import  Header  from "./Header";
import { Footer } from "./Footer";
import Note from './Note';
import source from './source';
import CreateArea from './CreateArea';

function App() {

    const [notes,setNotes] = useState([])

    function saveNote(NotesList) {
        setNotes((previousValue) =>{
            return [...previousValue,NotesList]
        })
    }

    function deleteNote(id) {
        setNotes( previousValue =>{
            return previousValue.filter((Note,index) =>{
                return index !== id
            });
        });
    }

    return (
        <div>
        <Header />
        <CreateArea getNote={saveNote}/>
        <div>{notes.map((note,index) => <Note del={deleteNote} array={note} key={index} id={index} title={note.title} content={note.content}/>)}
        </div>
        <Footer />
        </div>
    );
}

export default App;