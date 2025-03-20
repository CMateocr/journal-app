import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: ( state, action ) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {

      state.notes.push(action.payload)
      state.isSaving = false;

    },
    setActiveNote: (state, action) => {

      state.active = action.payload;
      state.messageSaved = '';

    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map( note => note.id === action.payload.id ? action.payload : note)
      state.messageSaved = `${ action.payload.title }, actualizada correctamente`
    },
    deleteNoteById: (state, action) => {
      // state.isSaving = true;
      state.notes = state.notes.filter( ({ id }) => id !== action.payload);
      state.active = null;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ]
      state.isSaving = false;
    },
    clearNotesLogout: (state, action) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null;

    },

  }
});


export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote,
  setPhotosToActiveNote,
  clearNotesLogout
} = journalSlice.actions;