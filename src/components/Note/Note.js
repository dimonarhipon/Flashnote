import React from 'react';
import clases from './Note.module.css';

class Note extends React.Component {


	updateNote = (event) => {
		console.log(3);
	}
	render() { 
		let {id, title, message, deleteNote} = this.props;

		return <div>
			<div className={clases.note_wrap} draggable="true">
				<div className={clases.note} contenteditable="true">
					{message}
				</div>
				<button className={clases.note_delete} onClick={ () => deleteNote(id)}>
					x
				</button>
			</div>
		</div>
	}	
}

export default Note;