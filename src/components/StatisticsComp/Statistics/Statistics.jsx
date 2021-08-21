import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function Statistics({ options, total, positivePercentage }) {
  const ops = Object.keys(options);
  return (
    <ul>
      {ops.map(item => (
        <li key={shortid.generate()}>
          {item}:<span> {options[item]}</span>
        </li>
      ))}
      {total ? (
        <li>
          total: <span>{total}</span>
        </li>
      ) : null}
      {positivePercentage ? (
        <li>
          positive feedback: <span>{positivePercentage}%</span>
        </li>
      ) : null}
    </ul>
  );
}

Statistics.propTypes = {
  options: PropTypes.shape({}).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
