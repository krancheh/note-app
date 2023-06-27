import {createSlice} from "@reduxjs/toolkit";

const noteListSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [
            {
                id: 1,
                title: 'Note 2',
                text: 'Lorem ipsum keke skks asdnasdaio as daskdn aksdaasd asd asdasp! As. ipsum keke skks asdnasdaioipsum keke skks asdnasdaio ipsum keke skks asdnasdaio ipsum keke skks asdnasdaio',
                color: '#FFF96F'
            },
            {id: 2, title: 'Note 1', text: 'Рандом текстик 1', color: '#FFF96F'},
            {id: 3, title: 'Note 3', text: 'Рандом текстик 3', color: '#FFF96F'},
            {id: 4, title: 'Note 4', text: 'Рандом текстик 4', color: '#FFF96F'},
            {id: 5, title: 'Note 5', text: 'Рандом текстик 4 Негры', color: '#FFF96F'},
            {id: 6, title: 'Note 6', text: 'Рандом текстик 4 Негры', color: '#FFF96F'},
            {id: 7, title: 'Note 7', text: 'Рандом текстик 4 Негры ', color: '#FFF96F'},
            {id: 8, title: 'Note 8', text: 'Рандом текстик 4 Негры ', color: '#FFF96F'},
        ],
    },
    reducers: {
        addNote(state, action) {
            state.notes.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                text: action.payload.text,
                color: action.payload.color,
            })
        },

        deleteNote(state, action) {
            state.notes = state.notes.filter(note => note.id !== action.payload.id);
        },

        findNotes(state, action) {
            const searchText = action.payload.toLowerCase();
            // const notesCopy = state.notes TODO сделать копию массива для работы поиска
            state.notes = state.notes.filter((note) => note.text.toLowerCase().includes(searchText) || note.title.toLowerCase().includes(searchText))
        }

    }

});


export const {addNote, deleteNote, findNotes} = noteListSlice.actions;
export default noteListSlice.reducer;