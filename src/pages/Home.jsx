import AddNoteForm from "../component/notes/AddNoteForm"
import NoteList from "../component/notes/NoteList"
import SearchBar from "../component/notes/SearchBar"

export default function Home() {
    return (
        <>
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Notebook App</h1>
                <SearchBar/>
                <AddNoteForm/>
                <NoteList/>
            </div>
        </>
    )
}