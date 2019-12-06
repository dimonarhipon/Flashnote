import React from 'react';
import clases from './Note.module.css';
import PropTypes from 'prop-types';

// class Note extends React.Component {


// 	updateNote = (event) => {
// 		console.log(3);
// 	}
// 	render() { 
// 		let {id, title, message, deleteNote} = this.props;

// 		return <div>
// 			<div className={clases.note_wrap} draggable="true">
// 				<div className={clases.note} contenteditable="true">
// 					{message}
// 				</div>
// 				<button className={clases.note_delete} onClick={ () => deleteNote(id)}>
// 					x
// 				</button>
// 			</div>
// 		</div>
// 	}	
// }

const Note = ({ message, deleteNote, id }) => (
	<li className="note-item">
		<span>{message}</span>
		<button className={clases.note_delete} onClick={ () => deleteNote(id)}>
			x
		</button>
	</li>
);

Note.propTypes = {
	message: PropTypes.string,
	deleteNote: PropTypes.func, 
	id: PropTypes.string,
}
Note.defaultProps = {
	message: '',
	deleteNote: () => {},
	id: ''
}


export default Note;