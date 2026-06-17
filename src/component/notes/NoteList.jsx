import { useNoteStore } from "../../store/notesStore"
import NoteCard from "./NoteCard"

export default function NoteList() {

const notes=useNoteStore((state)=>state.notes)

    if (notes.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-6">There is no Note here!</p>
        )
    }
    
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {notes.map((note)=>(<NoteCard key={note.id} note={note} />))}
        </div>
        </>
    )
} 