import React from 'react';
import clases from './FlashNote.module.css';

let FlashNote = () => {

	document.querySelector('.column')

	return (
		<div className={clases.container}>
			<div className={clases.row}>
				<div className={clases.column} draggable="true">
					<p className={clases.column_header} contenteditable="true">
						Заголовок 1
					</p>
					<div data-notes>
						<div className={clases.note} draggable="true" contenteditable="true">
							Задача 1.1
						</div>
						<div className={clases.note} draggable="true" contenteditable="true">
							Задача 1.2
						</div>
						<div className={clases.note} draggable="true" contenteditable="true">
							Задача 1.3
						</div>
					</div>
					<div className={clases.footer}>
						<button type="button" className={clases.addNode}>
							+ Добавить карточку
						</button>
					</div>
				</div>
			</div>

		</div>
	);
}
export default FlashNote;