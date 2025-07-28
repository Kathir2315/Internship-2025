import React, { useState, useEffect } from "react";

export default function NoteEditor({ note, setNotes, notes, setActiveNoteId }) {
  const [tempContent, setTempContent] = useState("");

  useEffect(() => {
    if (note) setTempContent(note.content);
  }, [note]);

  const saveContent = () => {
    const updatedNotes = notes.map(n =>
      n.id === note.id ? { ...n, content: tempContent } : n
    );
    setNotes(updatedNotes);
  };

  const deleteNote = () => {
    const filtered = notes.filter(n => n.id !== note.id);
    setNotes(filtered);
    setActiveNoteId(null);
  };

  if (!note) {
    return (
      <div className="w-5/5 h-5/5 flex items-center justify-center bg-black text-gray-400 text-lg">
        Create a note... 
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col">
      

      <div className="flex justify-end items-center p-2 border-b gap-2">
        <button
          onClick={saveContent}
          className="bg-teal-500 text-white px-4 py-1 rounded hover:bg-teal-600 active:scale-95 transition-all duration-200"
        >
          SAVE
        </button>
        <button
          onClick={deleteNote}
          className="text-red-500 text-xl hover:text-red-600 active:scale-95 transition-all duration-200"
        >
          🗑️
        </button>
      </div>

      
     <textarea
  className="flex-1 p-6 bg-black text-white text-xl font-semibold outline-none resize-none placeholder-gray-400 leading-relaxed"
  placeholder=" Typing here..."
  value={tempContent}
  onChange={(e) => setTempContent(e.target.value)}
/>

    </div>
  );
}
