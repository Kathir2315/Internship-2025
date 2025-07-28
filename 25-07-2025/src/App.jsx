import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoteEditor from "./components/NoteEditor";


export default function App() {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  const activeNote = notes.find(note => note.id === activeNoteId);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
      />
      <NoteEditor
        note={activeNote}
        notes={notes}
        setNotes={setNotes}
      />
    </div>
  );
}
