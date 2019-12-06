import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashNoteContainer from './components/FlashNote/FlashNote.js';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  	return (
  		<BrowserRouter>
		    <div className="App-wrapper">
		    	<Route path=''
		    			render={ () => <FlashNoteContainer /> }/>
		    </div>
		</BrowserRouter>
 	);
}

export default App;
