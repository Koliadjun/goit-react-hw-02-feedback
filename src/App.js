import './App.css';
import shortid from 'shortid'
import React, { Component } from 'react'

export class App extends Component {

  static defaultProps = {

  }
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  clickHandler = (e) => (

    this.setState((prevState) => (
      { [e.target.textContent]: prevState[e.target.textContent] + 1 }
    ))
  )
  countTotalFeedback = () => {
    const value = Object.values(this.state);
    return value.reduce((acc = 0, curValue) => (
      acc += curValue
    ))
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback()
    const totalFeedbackPrs = this.countPositiveFeedbackPercentage()
    return (
      <div>
        <h2>Please live a comment</h2>
        <ul>
          {
            options.map(item => (
              <li key={shortid.generate()}>
                <button onClick={this.clickHandler}>{item}</button>
              </li>))
          }
        </ul>
        <h2>Statistic</h2>
        <ul>
          {options.map(item => (
            <li key={shortid.generate()}>{item}:
              <span> {this.state[item]}</span>
            </li>))}
          {totalFeedback ? <li>total: <span>{totalFeedback}</span></li> : null}
          {totalFeedbackPrs ? <li>positive feedback: <span>{totalFeedbackPrs}%</span></li> : null}
        </ul >
      </div >
    )
  }
}

export default App
