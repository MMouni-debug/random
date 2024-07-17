import {Component} from 'react'
import './index.css'

export default class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onRequestToGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      randomNumber: newRandomNumber,
    })
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="rand-num-generator-bg-container">
        <div className="rand-num-content-container">
          <h1 className="rand-num-content-header">Random Number</h1>
          <p className="rand-num-content-description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="rand-num-generate-button"
            onClick={this.onRequestToGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="rand-num-text">{randomNumber}</p>
        </div>
      </div>
    )
  }
}