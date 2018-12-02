import React, {Component} from 'react'
import './App.css'

const padText = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickText: null,
      clickIndex: null
    }
    this.handleKeyboard = this.handleKeyboard.bind(this)
    document.addEventListener('keydown', this.handleKeyboard, false)
    document.addEventListener('keyup', this.handleClickOver, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboard, false)
    document.removeEventListener('keyup', this.handleClickOver, false)
  }

  handleClick = index => {
    this.setState({
      clickText: `heat ${index + 1}`,
      clickIndex: index
    })
    this.handleAudio(index)
  }

  handleClickOver = () => {
    this.setState({
      clickIndex: null
    })
  }

  handleKeyboard = e => {
    switch (e.keyCode) {
      case 81:
        this.handleClick(0)
        break
      case 87:
        this.handleClick(1)
        break
      case 69:
        this.handleClick(2)
        break
      case 65:
        this.handleClick(3)
        break
      case 83:
        this.handleClick(4)
        break
      case 68:
        this.handleClick(5)
        break
      case 90:
        this.handleClick(6)
        break
      case 88:
        this.handleClick(7)
        break
      case 67:
        this.handleClick(8)
        break
      default:
        break
    }
  }

  handleAudio = index => {
    const audio = document.getElementById(`audio${index}`)
    audio.pause()
    audio.play()
  }

  render() {
    const {clickText, clickIndex} = this.state
    return (
      <div className="App">
        <div id="drum-machine">
          <div className="drum-pads">
            {padText.map((text, index) => (
              <div
                className={`drum-pad ${
                  clickIndex === index ? 'active-pad' : ''
                }`}
                onMouseDown={() => this.handleClick(index)}
                onMouseUp={this.handleClickOver}
                key={text}
              >
                <span>{text}</span>
                <audio
                  src={`https://s3.amazonaws.com/freecodecamp/drums/Heater-${index +
                    1}.mp3`}
                  className="clip"
                  id={`audio${index}`}
                />
              </div>
            ))}
          </div>
          <div id="display">{clickText || ''}</div>
        </div>
      </div>
    )
  }
}

export default App
