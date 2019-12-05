import React from 'react';
import clases from './Note.module.css';

let Note = () => {
	return (
		<div className={clases.note} draggable="true" contenteditable="true">
			
		</div>
	);
}

export default Note;