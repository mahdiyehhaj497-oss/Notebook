import { useState } from "react"
import { useNotesStore } from "../../store/notesStore"

export default function AddNoteForm() {

    const addNote = useNotesStore((state) => state.addNote)
    
    const [title, setTitle] = useState("")
    const[text,setText]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !text.trim())
            return 
        addNote(title, text);
        setText("")
        setTitle("")
    }
    
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-full bg-white p-4 rounded-xl shadow-md flex flex-col gap-3">
                <input type="text"
                    placeholder=" title note..."
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="text note..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="border p-2 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition ">Add Note </button>

            </form>
        </>
    )
}