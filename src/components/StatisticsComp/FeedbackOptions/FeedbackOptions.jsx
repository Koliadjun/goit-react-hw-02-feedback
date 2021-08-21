import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(item => (
        <li key={shortid.generate()}>
          <button onClick={onLeaveFeedback}>{item}</button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
