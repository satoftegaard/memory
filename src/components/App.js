import React, { Component } from 'react'
import styles from './App.scss'
import BoxItem from './BoxItem'

const images = [
  require('../images/h-1.jpg'),
  require('../images/h-2.jpg'),
  require('../images/h-3.jpg'),
  require('../images/h-4.jpg'),
  require('../images/h-5.jpg'),
  require('../images/h-6.jpg'),
  require('../images/h-7.jpg'),
  require('../images/h-8.jpg')
]

class App extends Component {

  constructor () {
    super()
    this.state = {
      matched: [],
      picks: [],
      won: false
    }
  }

  choose (card) {
    if (this.state.picks.length === 2 || this.state.matched.includes(card)) { return } // DO NOTHING, BAIL OUT
    this.setState({
      picks: [...this.state.picks, card]
    }, () => {
      if (this.state.picks.length === 2) {
        this.check()
      }
    })
  }

  check () {
    const picks = this.state.picks
    if (images[picks[0]] === images[picks[1]]) {
      this.setState({
        matched: [...this.state.matched, ...picks],
        picks: []
      }, () => {
        if (this.state.matched.length === images.length) {
          this.setState({
            won: true
          })
        }
      })
    }
    setTimeout(() => {
      this.setState({ picks: [] })
    }, 3000)
  }

  render () {
    const picks = this.state.picks
    const matched = this.state.matched
    return <div>
      <h1>{this.state.won ? 'YOU WIN' : 'MEMORY'}</h1>
      <table>
        <tbody>
          <tr>
            <BoxItem image={images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} />
            <BoxItem image={images[1]} isUp={picks.includes(1) || matched.includes(1)} handleClick={() => this.choose(1)} />
            <BoxItem image={images[2]} isUp={picks.includes(2) || matched.includes(2)} handleClick={() => this.choose(2)} />
            <BoxItem image={images[3]} isUp={picks.includes(3) || matched.includes(3)} handleClick={() => this.choose(3)} />
          </tr>
          <tr>
            <BoxItem image={images[4]} isUp={picks.includes(4) || matched.includes(4)} handleClick={() => this.choose(4)} />
            <BoxItem image={images[5]} isUp={picks.includes(5) || matched.includes(5)} handleClick={() => this.choose(5)} />
            <BoxItem image={images[6]} isUp={picks.includes(6) || matched.includes(6)} handleClick={() => this.choose(6)} />
            <BoxItem image={images[7]} isUp={picks.includes(7) || matched.includes(7)} handleClick={() => this.choose(7)} />
          </tr>
          <tr>
            <BoxItem image={images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} />
            <BoxItem image={images[1]} isUp={picks.includes(1) || matched.includes(1)} handleClick={() => this.choose(1)} />
            <BoxItem image={images[2]} isUp={picks.includes(2) || matched.includes(2)} handleClick={() => this.choose(2)} />
            <BoxItem image={images[3]} isUp={picks.includes(3) || matched.includes(3)} handleClick={() => this.choose(3)} />
          </tr>
          <tr>
            <BoxItem image={images[4]} isUp={picks.includes(4) || matched.includes(4)} handleClick={() => this.choose(4)} />
            <BoxItem image={images[5]} isUp={picks.includes(5) || matched.includes(5)} handleClick={() => this.choose(5)} />
            <BoxItem image={images[6]} isUp={picks.includes(6) || matched.includes(6)} handleClick={() => this.choose(6)} />
            <BoxItem image={images[7]} isUp={picks.includes(7) || matched.includes(7)} handleClick={() => this.choose(7)} />
          </tr>
        </tbody>
      </table>
    </div>
  }
}

export default App
