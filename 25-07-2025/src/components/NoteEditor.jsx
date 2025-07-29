import React, { useState, useEffect } from "react";

export default function NoteEditor({ note, setNotes, notes, setActiveNoteId }) {
  const [tempContent, setTempContent] = useState("");

  useEffect(() => {
    if (note) setTempContent(note.content);
  }, [note]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (note && tempContent !== note.content) {
        const updatedNotes = notes.map(n =>
          n.id === note.id ? { ...n, content: tempContent } : n
        );
        setNotes(updatedNotes);
      }
    },200);

    return () => clearTimeout(timeoutId);
  }, [tempContent, note, notes, setNotes]);

  const handleDone = () => {
    if (!note) return;

    const updatedNotes = notes.map(n =>
      n.id === note.id ? { ...n, content: tempContent } : n
    );
    setNotes(updatedNotes);
    setActiveNoteId(null);
    alert("✅ File saved!");
  };

  if (!note) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black text-gray-500 text-lg">
        Create a note...
      </div>
    );
  }

  return (
    <div className="flex-1 bg-black text-white flex flex-col h-full">
      <div className="bg-blue-500 h-15 text-black px-4 py-2 shadow-md flex justify-end items-center">
        <button
          onClick={handleDone}
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition-all text-sm"
        >
          Done
        </button>
      </div>

      <textarea
        className="flex-1 w-full p-6 bg-black text-white text-xl font-mono font-semibold outline-none resize-none placeholder-gray-500 leading-relaxed"
        placeholder="Start typing..."
        value={tempContent}
        onChange={(e) => setTempContent(e.target.value)}
      />
    </div>
  );
}
