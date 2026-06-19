import { useNotesStore } from "../../store/notesStore"

export default function SearchBar() {
    const searchQuery = useNotesStore((state) => state.searchQuery);
    const setSearchQuery=useNotesStore((state)=> state.setSearchQuery)
    
    return (
        <>
            <input
                type="text"
                placeholder="Searching in Notes"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </>
    )
}