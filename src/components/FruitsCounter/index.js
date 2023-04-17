// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }
  eatMangoButton = () => {
    this.setState(prevMangoesCount => ({
      mangoesCount: prevMangoesCount.mangoesCount + 1,
    }))
  }

  eatBananaButton = () => {
    this.setState(prevBananasCount => ({
      bananasCount: prevBananasCount.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span className="mango-counter">{mangoesCount} </span> mangoes{' '}
          <span className="banana-counter"> {bananasCount} </span>
          bananas
        </h1>
        <div className="image-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />
            <div>
              <button
                type="button"
                className="btn"
                onClick={this.eatMangoButton}
              >
                Eat Mango
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
            <div>
              <button
                type="button"
                className="btn"
                onClick={this.eatBananaButton}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
