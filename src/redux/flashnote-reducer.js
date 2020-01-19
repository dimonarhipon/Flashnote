const ADD_NOTE = "ADD-NOTE";
const DELETE_NOTE = "DELETE-NOTE";
const CHANGE_TITLE_NOTE = "CHANGE-TITLE-NOTE";
const CHANGE_TEXT_NOTE = "TEXT-NOTE";
const UPDATE_TEXT_NOTE = "UPDATE-TEXT-NOTE";

let initialState = {
  notes: [
    { id: 1, title: "Заметка №1", text: "Это текст заметки №1" },
    { id: 2, title: "Заметка №2", text: "Это текст заметки №2" }
  ],
  changeTitleNote: "Заголовок",
  changeTextNote: "Текст",
  counter: 3
};

const flashnoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: ++state.counter,
            title: state.changeTitleNote,
            text: state.changeTextNote
          }
        ],
        changeTitleNote: "",
        changeTextNote: ""
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter(notes => notes.id !== action.id)]
      };
    case CHANGE_TITLE_NOTE:
      return {
        ...state,
        changeTitleNote: action.title
      };
    case CHANGE_TEXT_NOTE:
      return {
        ...state,
        changeTextNote: action.text
      };

    // case SET_NOTES: {
    //   return { ...state, notes: [...state.notes, ...action.note] };
    // }
    default:
      return state;
  }
};

export const addNoteAC = () => ({
  type: ADD_NOTE
});
export const deleteNoteAC = id => ({
  type: DELETE_NOTE,
  id
});
export const changeTitleNoteAC = title => ({
  type: CHANGE_TITLE_NOTE,
  title
});
export const changeTextNoteAC = text => ({
  type: CHANGE_TEXT_NOTE,
  text
});
export const updateNoteAC = () => ({
  type: UPDATE_TEXT_NOTE
});
export default flashnoteReducer;
