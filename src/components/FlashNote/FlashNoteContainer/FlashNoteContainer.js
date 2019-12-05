import React from 'react';
import Note from '../Note/Note.js';
import {connect} from "react-redux";
import {addActionCreator, deleteActionCreator, setNotesActionCreator, updateActionCreator} from "../../../flashnote-reducer.js"

let mapStateToProps = (state) => {
	return {
		notes: state.flashnotePage.notes,
		pageSize: state.flashnotePage.pageSize,
		totalNotesCount: state.flashnotePage.totalNotesCount,
		currentPage: state.notesPage.currentPage
	}
}
let mapDishpatchToProps = (dispatch) => {
	return {
		update: (noteId) => {
			dispatch(updateActionCreator(noteId))
		}
		add: (noteId) => {
			dispatch(addActrionCreator(noteId))
		}
		delete: (noteId) => {
			dispatch(deleteActrionCreator(noteId))
		}
		setNotes: (notes) => {
			dispatch(setNotes)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Notes);