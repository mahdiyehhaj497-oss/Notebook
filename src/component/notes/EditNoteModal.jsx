import { useState } from "react"
import { useNotesStore } from "../../store/notesStore"
import Modal from "../ui/Modal"

export default function EditNoteModal({note ,isOpen,onClose}) {
    const updateNote = useNotesStore((state) => state.updateNote)
    const [title, setTitle] = useState(note.title)
    const [text, setText] = useState(note.text)
    const handleUpdate = (e) => {
        e.preventDefault();
        updateNote(note.id, {
            title,
            text
        })
        onClose()
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <h2 className="text-xl font-semibold mb-3">Editing Note</h2>
                
                <form
                    className="flex flex-col gap-3"
                    onSubmit={handleUpdate}>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 rounded-lg"
                        type="text" />
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="border p-2 rounded-lg h-28 resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >Save changes</button>
                    </form>
            </Modal>
        </>
    )
}