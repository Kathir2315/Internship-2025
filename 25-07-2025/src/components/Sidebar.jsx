import React, { useState } from "react";

export default function Sidebar({ notes, activeNoteId, setActiveNoteId, setNotes, showSidebar, toggleSidebar }) {
  const [editNoteId, setEditNoteId] = useState(null);
  const [tempTitle, setTempTitle] = useState("");

  const addNote = () => {
    const noteCount = notes.filter(note => note.title.startsWith("Note")).length;
    const newNote = {
      id: Date.now(),
      title: `Note ${noteCount + 1}`,
      content: "",
    };
    setNotes(prev => [...prev, newNote]);
    setActiveNoteId(newNote.id);
    if (showSidebar) toggleSidebar();
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

  const deleteNote = (id) => {
    const filtered = notes.filter(n => n.id !== id);
    setNotes(filtered);
    if (activeNoteId === id) setActiveNoteId(null);
  };

  return (
    <div className={`fixed md:static top-0 left-0 z-30 h-full bg-white shadow-md 
      w-4/5 md:w-1/4 lg:w-1/5 border-r p-4 backdrop-blur-sm 
      transition-transform duration-300 ease-in-out 
      ${showSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="flex justify-end md:hidden mb-4">
        <button className="text-red-600 font-bold text-xl" onClick={toggleSidebar}>✖</button>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {notes.map(note => (
          <div key={note.id} className="flex items-center gap-1 group">
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
                  onClick={() => {
                    setActiveNoteId(note.id);
                    if (showSidebar) toggleSidebar();
                  }}
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
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  🗑️
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
