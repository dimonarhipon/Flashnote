import React from 'react';
import clases from './FlashNote.module.css';

let FlashNote = () => {
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
					<p className={clases.footer}>
						<span className={clases.action}>
							+ Добавить карточку
						</span>
					</p>
				</div>
			</div>

		</div>
	);
}
export default FlashNote;