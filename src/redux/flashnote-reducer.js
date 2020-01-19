const ADD_NOTE = "ADD-NOTE";
const DELETE_NOTE = "DELETE-NOTE";
const UPDATE_NOTE_TEXT = "UPDATE-NOTE-TEXT";
const SET_NOTES = "SET-NOTES";

let initialState = {
  notes: [
    { id: 1, title: "Заметка №1", message: "Это текст заметки №1" },
    { id: 20, title: "Заметка №20", message: "Это текст заметки №20" }
  ],
  newNoteText: ""
};

const flashnoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.posts],
        newNoteText: ""
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: [...state.posts],
        newNoteText: ""
      };

    // case UPDATE_NOTE_TEXT:
    // 	let stateCopy = {
    // 		...state,
    // 		notes: state.notes.map( notes => {
    // 			if (note.id === action.noteId) {
    // 				return ...state
    // 			}
    // 			return notes;
    // 		})
    // 	}

    // case SET_NOTES: {
    //   return { ...state, notes: [...state.notes, ...action.note] };
    // }
    default:
      return state;
  }
};

export const addActionCreator = noteId => ({ type: ADD_NOTE, noteId });
export const deleteActionCreator = noteId => ({ type: DELETE_NOTE, noteId });
export const setNotesActionCreator = notes => ({ type: SET_NOTES, notes });

export const updateActionCreator = text => ({
  type: UPDATE_NOTE_TEXT,
  newText: text
});

export default flashnoteReducer;
