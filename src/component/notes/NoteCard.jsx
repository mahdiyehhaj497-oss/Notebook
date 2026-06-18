import { useState } from "react"
import { useNoteStore } from "../../store/notesStore"
import { Pencil } from "lucide";

export default function NoteCard({ note }) {
    const deleteNote = useNoteStore((state) => state.deleteNote)
    const[isEditingOpen,setIsEditingOpen]=useState(false)

    return (
      <>
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-semibold text-gray-800 ">
              {note.title}
            </h2>
            <div className="flex gap-3">
              <button className="text-blue-500 hover:text-blue-700 transation">
                <Pencil/>
              </button>
            
            <button
              onClick={() => deleteNote(note.id)}
              className="text-red-500 hover:text-red-700 transition">
              X
            </button>
                    </div>
                </div>

          <p className="text-xs text-gray-400 ">{note.text}</p>
          <span className="text-xs text-gray-400">
            {formatData(note.createdAt)}
          </span>
            </div>
            
            <EditingNoteModal
                note={note}
                isOpen={isEditingOpen}
                onClose={()=>setIsEditingOpen(false)}
            />
      </>
    );
}