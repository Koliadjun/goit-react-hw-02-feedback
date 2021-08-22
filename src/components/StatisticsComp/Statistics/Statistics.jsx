import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import s from './Statistics.module.css';
function Statistics({ options, total, positivePercentage }) {
  const ops = Object.keys(options);
  return (
    <ul className={s.list}>
      {ops.map(item => (
        <li className={s.item} key={shortid.generate()}>
          {item}:<span> {options[item]}</span>
        </li>
      ))}
      {total ? (
        <li className={s.item}>
          total: <span>{total}</span>
        </li>
      ) : null}
      {positivePercentage ? (
        <li className={s.item}>
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
