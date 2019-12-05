const ADD_NOTE = 'ADD-NOTE';
const DELETE_NOTE = 'DELETE-NOTE';
const UPDATE_NOTE_TEXT = 'UPDATE-NOTE-TEXT';
const SET_NOTES = 'SET-NOTES';


let initialState = {
	notes: [
		{id: 1, title: 'Заметка №1', message: 'Это текст заметки №1' },
		{id: 2, title: 'Заметка №2',  message: 'Это текст заметки №2' },
		{id: 3, title: 'Заметка №3',  message: 'Это текст заметки №3' },
		{id: 4, title: 'Заметка №4',  message: 'Это текст заметки №4' },
		{id: 5, title: 'Заметка №5',  message: 'Это текст заметки №5' },
		{id: 6, title: 'Заметка №6',  message: 'Это текст заметки №6' },
		{id: 7, title: 'Заметка №7',  message: 'Это текст заметки №7' },
		{id: 8, title: 'Заметка №8',  message: 'Это текст заметки №8' },
		{id: 9, title: 'Заметка №9',  message: 'Это текст заметки №9' },
		{id: 10, title: 'Заметка №10',  message: 'Это текст заметки №10' },
		{id: 11, title: 'Заметка №11',  message: 'Это текст заметки №11' },
		{id: 12, title: 'Заметка №12',  message: 'Это текст заметки №12' },
		{id: 13, title: 'Заметка №13',  message: 'Это текст заметки №13' },
		{id: 14, title: 'Заметка №14',  message: 'Это текст заметки №14' },
		{id: 15, title: 'Заметка №15',  message: 'Это текст заметки №15' },
		{id: 16, title: 'Заметка №16',  message: 'Это текст заметки №16' },
		{id: 17, title: 'Заметка №17',  message: 'Это текст заметки №17' },
		{id: 18, title: 'Заметка №18',  message: 'Это текст заметки №18' },
		{id: 19, title: 'Заметка №19',  message: 'Это текст заметки №19' },
		{id: 20, title: 'Заметка №20',  message: 'Это текст заметки №20' },
	],
	newNoteText: ''
};


const flashnoteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NOTE: 
			let newNote = { 
				id: 21,
				message: state.newNoteText
			};
			return {
				...state,
				notes: [...state.posts, newNoteText],
				newNoteText: ''
			};


		case DELETE_NOTE:
			let deleteNote = { 
			};
			return {
				...state,
				notes: [...state.posts, newNoteText],
				newNoteText: ''
			};

		case UPDATE_NOTE_TEXT: 
			let stateCopy = { 
				...state, 
				notes: state.notes.map( notes => {
					if (note.id === action.noteId) {
						return (...note, newNoteText: '')
					}
					return notes;
				}) 
			}	

		case SET_NOTES: {
			return { ...state, notes: [...state.notes, ...action.note]}
		}
		default:
			return state;
	}
}


export const addActionCreator = (noteId) => ({type: ADD_NOTE, noteId})
export const deleteActionCreator = (noteId) => ({type: DELETE_NOTE, noteId}) 
export const setNotesActionCreator = (notes) => ({type: SET_NOTES, notes})

export const updateActionCreator = (text) => ({type: UPDATE_NOTE_TEXT, newText: text })


export default flashnoteReducer;