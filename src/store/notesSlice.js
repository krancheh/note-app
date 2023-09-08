import {createSlice} from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [
            {
                id: '1',
                title: 'Note 2',
                content: 'Lorem ipsum keke skks asdnasdaio as daskdn aksdaasd asd asdasp! As. ipsum keke skks asdnasdaioipsum keke skks asdnasdaio ipsum keke skks asdnasdaio ipsum keke skks asdnasdaio',
                date: 1688318805,
                color: '#fff992',
            },
            {id: '2', title: 'Note 1', content: 'Рандом текстик 1', date: '2023-07-01T18:41:38.821Z', color: '#fff992'},
            {id: '3', title: 'Note 3', content: 'Рандом текстик 3', date: 1688318805, color: '#fff992'},
            {id: '4', title: 'Note 4', content: 'Рандом текстик 4', date: 1688318805, color: '#fff992'},
            {id: '5', title: 'Note 5', content: 'Рандом текстик 4 Негры', date: 1688318805, color: '#fff992'},
            {id: '6', title: 'Note 6', content: 'Рандом текстик 4 Негры', date: 1688318805, color: '#fff992'},
            {id: '7', title: 'Note 7', content: 'Рандом текстик 4 Негры ', date: 1688318805, color: '#fff992'},
            {id: '8', title: 'Note 8', content: 'Рандом текстик 4 Негры ', date: 1688318805, color: '#fff992'},
        ],
        searchQuery: '',
        viewMode: 'vm-tiles',
    },
    reducers: {
        addNote(state, action) {
            state.notes.push({
                id: new Date().toISOString(),
                title: 'New note',
                content: 'Write something...',
                date: new Date().getTime(),
                color: action.payload.color,
            })
        },

        deleteNote(state, action) {
            state.notes = state.notes.filter(note => note.id !== action.payload.id);
        },

        updateNote(state, action) {
            const note = state.notes.filter(note => note.id === action.payload.newNote.id)[0];
            console.log(note)
            note.title = action.payload.newNote.title;
            note.content = action.payload.newNote.content;
            note.date = action.payload.newNote.date;
        },

        setSearchQuery(state, action) {
            state.searchQuery = action.payload.toLowerCase();
        },

        setViewMode(state, action) {
            state.viewMode = action.payload;
        },

    }

});


const compareDates = (noteA, noteB) => {
    const dateA = new Date(noteA.date);
    const dateB = new Date(noteB.date);

    return dateB - dateA;
}


// SELECTORS
export const selectViewMode = (state) => state.notes.viewMode;

export const selectNotes = (state) => state.notes.notes;

export const selectFilteredNotes = (state) => {
    const searchQuery = state.notes.searchQuery;
    const notes = [...state.notes.notes].sort(compareDates);

    return notes.filter((note) => note.title.toLowerCase().includes(searchQuery) || note.content.toLowerCase().includes(searchQuery))
}

export const {
    addNote,
    deleteNote,
    updateNote,
    setSearchQuery,
    setViewMode,
} = notesSlice.actions;


export default notesSlice.reducer;