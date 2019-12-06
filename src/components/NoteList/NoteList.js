import React from 'react';
import PropTypes from 'prop-types';

import Note from '../Note/Note.js';


const NoteList = ({ notesList,  deleteNote}) => (
	<ul className="note-list">
		{notesList.map(( {id, message }) => (
			<Note key={id} message={message} deleteNote={deleteNote} id={id}/>
		))}
	</ul>
)

NoteList.propTypes = {
	notesList: PropTypes.array,
	deleteNote: PropTypes.func,
}

NoteList.defaultProps = {
	notesList: [],
	deleteNote: () => {}
}

export default NoteList;