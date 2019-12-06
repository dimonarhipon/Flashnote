import React from 'react';
import PropTypes from 'prop-types';

const NoteInput = ({ value, onChange, onKeyPress }) => {
	<div className="note-input__wrapper">
		<input className="note-input"
				placeholder="add note"
				onChange={onChange}
				value={value}
				onKeyPress={onKeyPress}
		/>
	</div>
}

NoteInput.propTypes = {
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func,
	value: PropTypes.string,
}

NoteInput.defaultProps = {
	onChange: () = {},
	onKeyPress: () => {},
	value: '',
}

export default NoteInput;