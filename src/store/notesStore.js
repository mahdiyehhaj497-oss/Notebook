import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNoteStore = create(
    persist(
        (set) => ({
            note: [],
            addNote: (title, text) =>
                set((state) => ({
                    notes: [
                        ...state.notes,
                        {
                            id: crypto.randomUUID(),
                            title,
                            text,
                            createdAt:new Date().toISOString(),
                        },
                    ],
                })),
            deleteNote: (id) =>
                set((state) => ({
                    notes:state.notes.filter((note)=> note.id !== id),
                })),
            updateNote: (id, newData) =>
                set((state) => ({
                    notes: state.notes.map((note) =>
                        note.id=== id ? {...note , ...newData} : note
                    ),
                })),
            searchNotes: (query) =>
                set((state) => ({
                    filtered: state.notes.filter(
                        (note) =>
                            note.title.toLowerCase().includes(query.toLowerCase()) ||
                            note.text.toLowerCase().includes(query.toLowerCase())
                    )
                }))
        }),
   {name :"notes-storage"} //ذخیره در localstorage
    )
)