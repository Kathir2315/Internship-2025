const colors = ['#ffd6a5', '#ffadad', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];
let lastAddedNoteId = null;

function getNotes() {
  const stored = localStorage.getItem('stickyNotes');
  return stored ? JSON.parse(stored) : [];
}

function saveNotes(notes) {
  localStorage.setItem('stickyNotes', JSON.stringify(notes));
}

function addNote() {
  const notes = getNotes();
  const newNote = {
    id: Date.now(),
    content: '',
    color: colors[Math.floor(Math.random() * colors.length)],
  };
  notes.push(newNote);
  lastAddedNoteId = newNote.id; // track the most recently added note
  saveNotes(notes);
  renderNotes();
}

function updateNote(id, content) {
  const notes = getNotes().map(note => {
    if (note.id === id) note.content = content;
    return note;
  });
  saveNotes(notes);
}

function deleteNote(id) {
  const notes = getNotes().filter(note => note.id !== id);
  saveNotes(notes);
  renderNotes();
}

function renderNotes() {
  const notes = getNotes();
  const container = document.getElementById('notesContainer');
  container.innerHTML = '';

  notes.forEach(note => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3';

    const card = document.createElement('div');
    card.className = 'note';
    card.style.backgroundColor = note.color;

    // Only animate the last added note
    if (note.id === lastAddedNoteId) {
      card.setAttribute('data-aos', 'zoom-in-up');
    }

    const actions = document.createElement('div');
    actions.className = 'note-actions';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.onclick = () => deleteNote(note.id);
    actions.appendChild(deleteBtn);

    const textarea = document.createElement('textarea');
    textarea.value = note.content;
    textarea.oninput = () => updateNote(note.id, textarea.value);

    card.appendChild(actions);
    card.appendChild(textarea);
    col.appendChild(card);
    container.appendChild(col);
  });

  AOS.refresh();
  lastAddedNoteId = null; // reset after rendering
}

window.onload = renderNotes;
