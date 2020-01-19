import { connect } from "react-redux";
import {
  addNoteAC,
  deleteNoteAC,
  changeTextNoteAC,
  changeTitleNoteAC
  // updateNoteAC
} from "../../redux/flashnote-reducer.js";
import FlashNote from "./FlashNote.js";

let mapStateToProps = state => {
  return {
    Title: state.flashnoteReducer.changeTitleNote,
    Text: state.flashnoteReducer.changeTextNote,
    notes: state.flashnoteReducer.notes
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashNote);
