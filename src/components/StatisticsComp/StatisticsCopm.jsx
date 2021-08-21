import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
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

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc = 0, curValue) => (acc += curValue));

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const totalFeedback = this.countTotalFeedback();
    const totalFeedbackPrs = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={'Please live a comment'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickHandler}
          />
        </Section>
        {totalFeedback ? (
          <Section title="Statistics">
            <Statistics
              options={this.state}
              total={totalFeedback}
              positivePercentage={totalFeedbackPrs}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default StatisticsComp;
