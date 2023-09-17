import NotesService from "../../services/NotesService";

export const getNotesPayloadCreator = async (_, {rejectWithValue}) => {
    try {
        const response = await NotesService.getNotes()
        return {notes: response.data};
    } catch (error) {
        return rejectWithValue({errorMessage: error.message});
    }
}

export const addNotePayloadCreator = async (color, {rejectWithValue}) => {
    try {
        const note = {color};
        console.log(note)
        await NotesService.addNote(note)
        const response = await NotesService.getNotes();
        return {notes: response.data}
    } catch (error) {
        return rejectWithValue({errorMessage: error.message});
    }
}

export const deleteNotesPayloadCreator = async (noteIds, {rejectWithValue}) => {
    try {
        await NotesService.deleteNotes(noteIds)
        const response = await NotesService.getNotes();
        return {notes: response.data}
    } catch (error) {
        return rejectWithValue({errorMessage: error.message});
    }
}

export const updateNotePayloadCreator = async (note, {rejectWithValue}) => {
    try {
        console.log(note)
        await NotesService.updateNote(note)
        const response = await NotesService.getNotes();
        return {notes: response.data}
    } catch (error) {
        return rejectWithValue({errorMessage: error.message});
    }
}


export const notesExtraReducers = {
    fulfilled: (state, action) => {
        state.notes = action.payload.notes;
        state.isLoading = false;
    },
    pending: (state) => {
        state.isLoading = true;
    },
    rejected: (state, action) => {
        state.notes = [];
        state.isLoading = false;
        state.errorMessage = action.payload.errorMessage;
    }
}