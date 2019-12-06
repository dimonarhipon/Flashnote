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

const Note = ({ message }) => (
	<li className="note-item">
		<span>{message}</span>
	</li>
)

Note.propTypes = {
	message: PropTypes.string,
}
Note.defaultProps = {
	message: '',
}


export default Note;