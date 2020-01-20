const ADD_NOTE = "ADD-NOTE";
const DELETE_NOTE = "DELETE-NOTE";
const CHANGE_TITLE_NOTE = "CHANGE-TITLE-NOTE";
const CHANGE_TEXT_NOTE = "TEXT-NOTE";
const UPDATE_TEXT_NOTE = "UPDATE-TEXT-NOTE";
const ACTIVE_EDIT_MODE = "ACTIVE-EDIT-MODE";
const DEACTIVE_EDIT_MODE = "DEACTIVE-EDIT-MODE";

let initialState = {
  notes: [
    { id: 1, title: "Заметка №1", text: "Это текст заметки №1" },
    { id: 2, title: "Заметка №2", text: "Это текст заметки №2" }
  ],
  changeTitleNote: "Заголовок",
  changeTextNote: "Текст",
  counter: 3,
  editMode: false
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
      let Idtitle = id.action;
      debugger;
      return {
        ...state,
        changeTitleNote: [...(state.notes[Idtitle].title = action.title)]
      };
    case CHANGE_TEXT_NOTE:
      let newId = id.action;
      debugger;
      return {
        ...state,
        changeTextNote: [...(state.notes[newId].title = action.text)]
      };
    case UPDATE_TEXT_NOTE:
      return {
        ...state,
        updateText: action.text,
        notes: [...state.notes]
      };
    case ACTIVE_EDIT_MODE:
      return {
        ...state,
        editMode: true
      };
    case DEACTIVE_EDIT_MODE:
      return {
        ...state,
        editMode: false
      };
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
export const changeTitleNoteAC = (title, id) => ({
  type: CHANGE_TITLE_NOTE,
  title,
  id
});
export const changeTextNoteAC = (text, id) => ({
  type: CHANGE_TEXT_NOTE,
  text,
  id
});
export const activeEditModeAC = () => ({
  type: ACTIVE_EDIT_MODE
});
export const deactiveEditModeAC = () => ({
  type: DEACTIVE_EDIT_MODE
});
export const updateNoteTextAC = (text, id) => ({
  type: UPDATE_TEXT_NOTE,
  text,
  id
});
export default flashnoteReducer;
