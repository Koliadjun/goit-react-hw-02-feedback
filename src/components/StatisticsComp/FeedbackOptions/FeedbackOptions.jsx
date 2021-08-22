import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(item => {
        let color;
        switch (item) {
          case 'good':
            color = '#00ff00';
            break;
          case 'neutral':
            color = '#ff8e00';
            break;
          case 'bad':
            color = '#ff0000';
            break;
          default:
            color = 'grey';
            break;
        }
        return (
          <li className={s.item} key={shortid.generate()}>
            <button
              className={s.button}
              onClick={onLeaveFeedback}
              style={{ backgroundColor: ` ${color}` }}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
