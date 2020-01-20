import { connect } from "react-redux";
import {
  addNoteAC,
  deleteNoteAC,
  changeTextNoteAC,
  changeTitleNoteAC,
  activeEditModeAC,
  deactiveEditModeAC,
  updateNoteTextAC
} from "../../redux/flashnote-reducer.js";
import FlashNote from "./FlashNote.js";

let mapStateToProps = state => {
  return {
    Title: state.flashnoteReducer.changeTitleNote,
    Text: state.flashnoteReducer.changeTextNote,
    notes: state.flashnoteReducer.notes,
    editMode: state.flashnoteReducer.editMode
  };
};
let mapDispatchToProps = dispatch => {
  return {
    addNote: () => {
      dispatch(addNoteAC());
    },
    deleteNote: id => {
      dispatch(deleteNoteAC(id));
    },
    changeTitle: title => {
      dispatch(changeTitleNoteAC(title));
    },
    changeText: text => {
      dispatch(changeTextNoteAC(text));
    },
    // updateNoteText: (text, id) => {
    //   dispatch(updateNoteTextAC(text, id));
    // },
    activeEditMode: () => {
      dispatch(activeEditModeAC());
    },
    deactiveEditMode: () => {
      dispatch(deactiveEditModeAC());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashNote);
