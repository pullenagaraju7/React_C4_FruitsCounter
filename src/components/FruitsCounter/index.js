import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1} = this.state
    const {count2} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="head">
            Bob ate {count1} mangoes {count2} bananas
          </h1>
          <div className="imgcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="img"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="img"
            />
          </div>
          <div className="buttoncontainer">
            <button type="button" className="mango" onClick={this.onMango}>
              Eat Mango
            </button>
            <button type="button" className="banana" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
