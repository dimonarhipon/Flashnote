import React from 'react';
import notes from '../../redux/store.js'
import clases from './FlashNote.module.css';
import Note from '../Note/Note.js';
import * as axios from 'axios';


class FlashNote extends React.Component {
	state = {
		notes: notes
	};

	addNote = () => {
		this.setState(  
			[...notes, {id: '', title: '', message: ''}]
		)	
	};

	deleteNote = (id) => {

		this.setState(  ({notes}) => ({
			notes: notes.filter(el => el.id !== id)
		}))
	};

	render() {
		let { notes } = this.state;
		let pagesCount = this.totalNotesCount / this.props.pageSize;
		let pages = [];
		for (let i = 1; i < pagesCount; i++) {
			pages.push(i);
		}
// && style.selectedPage
// {{this.state.notes}}
		return ( <div>
				<div className={clases.pagination}>
					{ pages.map( p => {
						return <button className={this.props.currentPage === p}>
							{p}
						</button>
					})}
				</div>
				<div className={clases.container}>
					<div className={clases.row}>
						<div className={clases.column} draggable="true">
							<p className={clases.column_header} contenteditable="true">
								Заголовок 1
							</p>
							<div>
								{notes.map(el => 
									<Note deleteNote={this.deleteNote} {...el }/>)}
							</div>
							<div className={clases.footer}>
								<button onClick={this.addNote} className={clases.addNote}>
									+ Добавить карточку
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FlashNote;