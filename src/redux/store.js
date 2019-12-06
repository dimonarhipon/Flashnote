
import {save} from 'redux-localstorage-simple';
import {createStore, compose, applyMiddleware} from 'redux'; 
import rootReducer from './flashnote-reducer.js'; 

const composeEnhancers = 
	process.env.NODE_ENV !== 'production' &&
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => (
	createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(save({ namespace: 'note-list' }))
		),
	)
);

const store = configureStore({});

export default store;

// const notes = [
// 	{id: 1, message: 'Это текст заметки №1' },
// 	{id: 2, message: 'Это текст заметки №2' },
// 	{id: 3, message: 'Это текст заметки №3' },
// 	{id: 4, message: 'Это текст заметки №4' },
// 	{id: 5, message: 'Это текст заметки №5' },
// 	{id: 6,  message: 'Это текст заметки №6' },
// 	{id: 7,  message: 'Это текст заметки №7' },
// 	{id: 8,  message: 'Это текст заметки №8' },
// ];

// let pageSize: 5;
// let totalUserCount: 20;
// let currentPage: 2;

// export default notes;