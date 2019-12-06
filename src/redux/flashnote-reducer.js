import {combineReducers} from 'redux';
import {load} from 'redux-localstorage-simple';
import {ADD_NOTE, DELETE_NOTE, UPDATE_NOTE_TEXT, SET_NOTES} from './constans.js';

let NOTES = load({ namespace: 'note-list'});

if (!NOTES || !NOTES.note || !NOTES.note.length) {
	NOTES = {
		notes: [],
	}
}

const rootReducer = combineReducers({});

// let initialState = {
// 	notes: [
// 		{id: 1, title: 'Заметка №1', message: 'Это текст заметки №1' },
// 		{id: 2, title: 'Заметка №2',  message: 'Это текст заметки №2' },
// 	],
// 	newNoteText: ''
// };

// const NOTES = [
// 	{
// 		id: 1,
// 		message: 'Learn 1',
// 	},
// 	{
// 		id: 2,
// 		message: 'Learn 2',
// 	},
// 	{
// 		id: 3,
// 		message: 'Learn 3',
// 	},
// ]
export const deleteNote = id => ({
	type: DELETE_NOTE, 
	id,
})


const flashnoteReducer = (state = NOTES.notes, {id, message, type}) => {
	switch (type) {
		case ADD_NOTE: 
			return [
				...state, {
					id,
					message,
				}	
			];
		case DELETE_NOTE: 
			return [...state].filter(note => note.id !== id);
		default:
			return state;
	}
}


export const addActionCreator = (id, message) => ({
	type: ADD_NOTE, 
	id,
	message,
})
export const deleteActionCreator = (id, message) => ({
	type: DELETE_NOTE, 
	id, 
	message,
});
export const setNotesActionCreator = (id, message) => ({
	type: SET_NOTES, 
	id,
	message,
});

export const updateActionCreator = (id, message) => ({
	type: UPDATE_NOTE_TEXT, 
	id,
	message,
});


export default flashnoteReducer;