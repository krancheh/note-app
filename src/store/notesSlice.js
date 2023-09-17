import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    addNotePayloadCreator,
    deleteNotesPayloadCreator,
    getNotesPayloadCreator,
    notesExtraReducers, updateNotePayloadCreator
} from "./reducers/notesReducers";

export const getNotes = createAsyncThunk('notes/getNotes', getNotesPayloadCreator);
export const addNote = createAsyncThunk('notes/addNote', addNotePayloadCreator);
export const deleteNotes = createAsyncThunk('notes/deleteNotes', deleteNotesPayloadCreator);
export const updateNote = createAsyncThunk('notes/updateNote', updateNotePayloadCreator);

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
        isLoading: false,
        errorMessage: '',
        searchQuery: '',
        viewMode: 'vm-tiles',
    },
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload.toLowerCase();
        },
        setViewMode(state, action) {
            state.viewMode = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getNotes.fulfilled, notesExtraReducers.fulfilled)
            .addCase(getNotes.pending, notesExtraReducers.pending)
            .addCase(getNotes.rejected, notesExtraReducers.rejected)
            .addCase(addNote.fulfilled, notesExtraReducers.fulfilled)
            .addCase(addNote.pending, notesExtraReducers.pending)
            .addCase(addNote.rejected, notesExtraReducers.rejected)
            .addCase(deleteNotes.fulfilled, notesExtraReducers.fulfilled)
            .addCase(deleteNotes.pending, notesExtraReducers.pending)
            .addCase(deleteNotes.rejected, notesExtraReducers.rejected)
            .addCase(updateNote.fulfilled, notesExtraReducers.fulfilled)
            .addCase(updateNote.pending, notesExtraReducers.pending)
            .addCase(updateNote.rejected, notesExtraReducers.rejected)
    }

});


const compareDates = (noteA, noteB) => {
    const dateA = new Date(noteA.updatedAt);
    const dateB = new Date(noteB.updatedAt);

    return dateB - dateA;
}


// SELECTORS
export const selectViewMode = (state) => state.notes.viewMode;

export const selectNotes = (state) => state.notes.notes;
export const selectIsLoading = (state) => state.notes.isLoading;

export const selectFilteredNotes = (state) => {
    const searchQuery = state.notes.searchQuery;
    const notes = [...state.notes.notes].sort(compareDates);

    return notes.filter((note) => note.title.toLowerCase().includes(searchQuery) || note.content.toLowerCase().includes(searchQuery))
}

export const {
    setSearchQuery,
    setViewMode,
} = notesSlice.actions;


export default notesSlice.reducer;