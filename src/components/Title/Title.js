import React from 'react';
import PropsTypes from 'prop-types';

const Title = ({ title }) => (
	<h2 className="title">{title}</h2>
);

Title.propTypes = {
	 title: PropTypes.string,
}
Title.defaultProps = {
	titles: 'Simple title',
}

export default Title;