import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { useNotesStore } from "../../store/notesStore";

import EditNoteModal from "./EditNoteModal";

export default function NoteCard({ note }) {
  const deleteNote = useNotesStore((state) => state.deleteNote);
  const [isEditingOpen, setIsEditingOpen] = useState(false);

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-800">{note.title}</h2>

          <div className="flex gap-3">
            <button
              onClick={() => setIsEditingOpen(true)}
              className="text-blue-500 mx-2 hover:text-blue-700 transition"
            >
              Edite
            </button>

            <button
              onClick={() => deleteNote(note.id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              X
            </button>
          </div>
        </div>

        <p className="text-gray-600">{note.text}</p>

        <span className="text-xs text-gray-400">
          {formatDate(note.createdAt)}
        </span>
      </div>

      <EditNoteModal
        note={note}
        isOpen={isEditingOpen}
        onClose={() => setIsEditingOpen(false)}
      />
    </>
  );
}
