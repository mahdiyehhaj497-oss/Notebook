import { useNoteStore } from "../../store/notesStore"

export default function NoteCard({ note }) {
    const deleteNote=useNoteStore((state)=> state.deleteNote)

    return (
        <>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold text-gray-800 ">{note.title}</h2>
                    <button
                        onClick={()=> deleteNote(note.id)}
                        className="text-red-500 hover:text-red-700 transition"
                    >X</button>
                </div>

                <p className="text-xs text-gray-400 ">{note.text}</p>
                <span className="text-xs text-gray-400">{formData(note.createdAt) }</span>
</div>
        </>
    )
}