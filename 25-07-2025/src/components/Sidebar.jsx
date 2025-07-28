import React, { useState } from "react";

export default function Sidebar({ notes, activeNoteId, setActiveNoteId, setNotes }) {
  const [editNoteId, setEditNoteId] = useState(null);
  const [tempTitle, setTempTitle] = useState("");

 
  const addNote = () => {
    const noteCount = notes.filter(note =>
      note.title.startsWith("Note")
    ).length;

    const newNote = {
      id: Date.now(),
      title: `Note ${noteCount + 1}`,
      content: "",
    };

    setNotes(prev => [...prev, newNote]);
    setActiveNoteId(newNote.id);
  };

  const handleRename = (id, title) => {
    setEditNoteId(id);
    setTempTitle(title);
  };

  const saveRename = (id) => {
    const updated = notes.map(note =>
      note.id === id ? { ...note, title: tempTitle } : note
    );
    setNotes(updated);
    setEditNoteId(null);
  };

  return (
    <div className="w-full md:w-1/4 lg:w-1/5 border-r p-4 backdrop-blur-sm ">
     
      <div className="flex flex-col gap-2 w-full">
        {notes.map(note => (
          <div key={note.id} className="flex items-center gap-1">
            {editNoteId === note.id ? (
              <>
                <input
                  className="text-sm p-1 border rounded w-full"
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                />
                <button
                  onClick={() => saveRename(note.id)}
                  className="text-green-600 text-sm"
                >
                  ✔
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setActiveNoteId(note.id)}
                  className={`flex-1 px-2 py-1 text-left text-sm rounded ${
                    activeNoteId === note.id ? "bg-gray-300" : "bg-gray-100"
                  }`}
                >
                  {note.title}
                </button>
                <button
                  onClick={() => handleRename(note.id, note.title)}
                  className="text-xs text-blue-600"
                >
                  ✏️
                </button>
              </>
            )}
          </div>
        ))}

       
        <button
          className="bg-blue-500 text-white text-sm px-2 py-1 rounded mt-2 hover:bg-blue-600 active:scale-95 transition-all duration-200"
          onClick={addNote}
        >
          New +
        </button>
      </div>
    </div>
  );
}
