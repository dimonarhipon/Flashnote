import React from 'react';

let FlashNote = () => {
	return (
		<div className="FlashNote">
			<div className="column" draggable="true">
				<p className="column-header" contenteditable="true">
					Заголовок 1
				</p>
				<div data-notes>
					<div className="note" draggable="true">
						Задача 1.1
					</div>
					<div className="note" draggable="true">
						Задача 1.2
					</div>
					<div className="note" draggable="true">
						Задача 1.3
					</div>
				</div>
				<p className="column-footer">
					<span className="action">
						+ Добавить карточку
					</span>
				</p>
			</div>
		</div>
	);
}
export default FlashNote;