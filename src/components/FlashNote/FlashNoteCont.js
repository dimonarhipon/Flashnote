import { connect } from "react-redux";
import {
  addActionCreator,
  deleteActionCreator,
  setNotesActionCreator,
  updateActionCreator
} from "../../flashnote-reducer.js";
import FlashNote from "./FlashNote.js";

let mapStateToProps = state => {
  return {
    notes: state.flashnoteReducer.notes,
    pageSize: state.flashnoteReducer.pageSize,
    totalNotesCount: state.flashnoteReducer.totalNotesCount,
    currentPage: state.flashnoteReducer.currentPage
  };
};
let mapDispatchToProps = dispatch => {
  return {
    update: noteId => {
      dispatch(updateActionCreator(noteId));
    },
    add: noteId => {
      dispatch(addActionCreator(noteId));
    },
    delete: noteId => {
      dispatch(deleteActionCreator(noteId));
    },
    setNotes: setNotes => {
      dispatch(setNotesActionCreator(setNotes));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashNote);
