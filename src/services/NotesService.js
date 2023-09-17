import $api from "../http";

export default class NotesService {
    static async getNotes() {
        return $api.get('/notes/notes');
    }

    static async getNoteById(noteId) {
        return $api.get(`/notes/note/${noteId}`);
    }

    static async addNote(note) {
        return $api.post('/notes/create', {note})
    }

    static async deleteNotes(noteIds) {
        return $api.put('/notes/delete', {noteIds})
    }

    static async updateNote(note) {
        return $api.put('/notes/update', note)
    }
}