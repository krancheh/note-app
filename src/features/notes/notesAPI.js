import {api} from "../../api/api";

export const notesAPI = api.injectEndpoints({
    endpoints: build => ({
        getNotes: build.query({
            query: () => ({
                url: '/notes/notes',
                method: 'GET',
                keepUnusedDataFor: 10,
            }),
            providesTags: ['Notes'],
        }),
        getNoteById: build.query({ // Переделать на более точные теги ({type: 'Notes', id})
            query: (id) => ({
                url: `/notes/note/${id}`,
                method: 'GET',
            })
        }),
        addNote: build.mutation({
            query: note => ({
                url: '/notes/create',
                method: 'POST',
                body: {note},
            }),
            invalidatesTags: ['Notes']
        }),
        updateNote: build.mutation({
            query: note => ({
                url: '/notes/update',
                method: 'PUT',
                body: {note},
            }),
            invalidatesTags: ['Notes'],
        }),
        deleteNotes: build.mutation({
            query: noteIds => ({
                url: '/notes/delete',
                method: 'PUT',
                body: {noteIds},
            }),
            invalidatesTags: ['Notes']
        })
    })
})

export const {
    useGetNotesQuery,
    useGetNoteByIdQuery,
    useAddNoteMutation,
    useUpdateNoteMutation,
    useDeleteNotesMutation
} = notesAPI;