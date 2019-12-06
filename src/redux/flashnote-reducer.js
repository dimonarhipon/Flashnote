import {combineReducers} from 'redux';
import {ADD_NOTE, DELETE_NOTE, UPDATE_NOTE_TEXT, SET_NOTES} from './constans.js';

const rootReducer = combineReducers({});

// let initialState = {
// 	notes: [
// 		{id: 1, title: 'Заметка №1', message: 'Это текст заметки №1' },
// 		{id: 2, title: 'Заметка №2',  message: 'Это текст заметки №2' },
// 	],
// 	newNoteText: ''
// };

const NOTE = [
	{
		id: 1,
		message: 'Learn 1',
	},
	{
		id: 2,
		message: 'Learn 2',
	},
	{
		id: 3,
		message: 'Learn 3',
	},
]


const flashnoteReducer = (state = NOTE, {id, message, type}) => {
	switch (type) {
		case ADD_NOTE: 
			return [
				...state, {
					id,
					message,
				}	
			];
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