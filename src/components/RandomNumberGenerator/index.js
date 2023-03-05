import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {even: 0}

  onRandom = () => {
    this.setState(() => ({
      even: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {even} = this.state
    return (
      <div className="bg-container">
        <div className="shadow card">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <button type="button" className="button_card" onClick={this.onRandom}>
            Generate
          </button>
          <p className="paragraph">{`${even}`}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
