import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoteEditor from "./components/NoteEditor";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const activeNote = notes.find(n => n.id === activeNoteId);

  const toggleSidebar = () => setShowSidebar(prev => !prev);

  return (
    <div className="flex h-screen relative">
      <Sidebar
        notes={notes}
        setNotes={setNotes}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 flex flex-col">
        {/* Top bar for mobile */}
        <div className="md:hidden bg-gray-900 text-white p-2 flex justify-between items-center shadow-md">
          <button onClick={toggleSidebar} className="text-xl font-bold">
            ☰
          </button>
          <span className="text-sm font-medium">Notes</span>
        </div>

        <NoteEditor
          note={activeNote}
          setNotes={setNotes}
          notes={notes}
          setActiveNoteId={setActiveNoteId}
        />
      </div>
    </div>
  );
}
