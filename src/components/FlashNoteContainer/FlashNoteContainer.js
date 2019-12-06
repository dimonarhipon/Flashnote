import React, {Component} from 'react';
import Note from './Note/Note.js';
import NoteInput from './NoteInput/NoteInput.js';
import NoteList from './NoteList/NoteList.js';
import {connect} from "react-redux";
import {addActionCreator, deleteActionCreator, setNotesActionCreator, updateActionCreator} from "../../../flashnote-reducer.js"

class FlashNoteContainer extends Component {
	state = {
		noteText: ''
	}

	handleInputChange = ({ target: {value} }) => {
		this.setState({
			noteText: value,
		})
	}

	addNote = ({key}) => {
		const {notesText} = this.state;
		if (notesText.length > 2 && key === 'Enter') {
			const {addNote} = this.props;

			addNote ((new Date)).getTime(), noteText);
 			

 			this.state({
 				notesText: '',
 			})
		}
	}

	render() {
		const {noteText} = this.state;
		const {notes} = this.prop;
		const isNotesExist = notes && notes.length > 0;

		return (
			<div className="flashnote-wrapper">
				<NoteInput  onChange={this.handleInputChange} 
							value={noteText}
							onKeyPress={this.addNote} />
				{isNotesExist && <NoteList notesList={notes} />}
			</div>
		)
	}
}

export default FlashNoteContainer;
export default connect(state => ({ 
	notes: state.notes,
})), {addActionCreator, deleteActionCreator, 
	setNotesActionCreator, updateActionCreator}(Note);