import {createSlice} from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
        searchQuery: '',
        viewMode: 'vm-tiles',
    },
    reducers: {
        setNotes(state, action) {
            state.notes = action.payload.notes;
        },
        updateNoteLocally(state, action) {
            console.log('ENTERED');
            const {updatedNote} = action.payload;
            console.log(updatedNote);
            const index = state.notes.findIndex(note => note.id === updatedNote.id);
            console.log(index)
            if (index !== -1) {
                state.notes[index].title = updatedNote.title;
                state.notes[index].content = updatedNote.content;
            }
        },
        deleteNoteLocally(state, action) {
            const {id} = action.payload;
            state.notes.filter(note => note.id !== id);
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload.searchQuery.toLowerCase();
        },
        setViewMode(state, action) {
            state.viewMode = action.payload.viewMode;
        },
    },
});


const compareDates = (noteA, noteB) => {
    const dateA = new Date(noteA.updatedAt);
    const dateB = new Date(noteB.updatedAt);

    return dateB - dateA;
}


// SELECTORS
export const selectViewMode = (state) => state.notes.viewMode;

export const selectNotes = (state) => state.notes.notes;

export const selectFilteredNotes = (state) => {
    const searchQuery = state.notes.searchQuery;

    if (state.notes.notes) {
        const notes = [...state.notes.notes].sort(compareDates);
        return notes.filter((note) => note.title.toLowerCase().includes(searchQuery) || note.content.toLowerCase().includes(searchQuery))
    }
    return [];
}

export const {
    setNotes,
    updateNoteLocally,
    deleteNoteLocally,
    setSearchQuery,
    setViewMode,
} = notesSlice.actions;


export default notesSlice.reducer;