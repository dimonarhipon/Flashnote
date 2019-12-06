import React from 'react';
import PropTypes from 'prop-types';

import Note from '../Note/Note.js';


const NoteList = ({ notesList }) => (
	<ul className="note-list">
		{notesList.map(( {id, message }) => (
			<Note key={id} message={message} />
		))}
	</ul>
)

NoteList.propTypes = {
	notesList: PropTypes.array,
}

NoteList.defaultProps = {
	notesList: [],
}

export default NoteList;