import shortid from 'shortid';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Statistics from './Statistics/Statistics';

export class StatisticsComp extends Component {
  static defaultProps = {
    stats: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };
  static propTypes = {
    stats: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
  };
  state = {
    ...this.props.stats,
  };
  clickHandler = e =>
    this.setState(prevState => ({
      [e.target.textContent]: prevState[e.target.textContent] + 1,
    }));
  countTotalFeedback = () => {
    const value = Object.values(this.state);
    return value.reduce((acc = 0, curValue) => (acc += curValue));
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const totalFeedbackPrs = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <div>
        <h2>Please live a comment</h2>
        <ul>
          {options.map(item => (
            <li key={shortid.generate()}>
              <button onClick={this.clickHandler}>{item}</button>
            </li>
          ))}
        </ul>
        <h2>Statistic</h2>
        <Statistics
          options={this.state}
          total={totalFeedback}
          positivePercentage={totalFeedbackPrs}
        />
      </div>
    );
  }
}

export default StatisticsComp;
