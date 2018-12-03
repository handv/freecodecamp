import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeRemain: 1500, //seconds
      timeStart: false
    }
    this.timer = null
  }

  leftPad = string => {
    if (String(string).length < 2) return `0${string}`
    return string
  }

  formatTime = second => {
    const minutes = this.leftPad(Math.floor(second / 60) % 60)
    const seconds = this.leftPad(second % 60)
    return `${minutes}:${seconds}`
  }

  breakDecrement = () => {
    const {breakLength, timeStart} = this.state
    if (!timeStart){
      this.setState({
        breakLength: breakLength > 1 ? breakLength - 1 : 1
      })
    }
  }

  breakIncrement = () => {
    const { breakLength, timeStart} = this.state
    if (!timeStart) {
    this.setState({
      breakLength: breakLength + 1
    })
  }
  }

  sessionDecrement = () => {
    const { sessionLength, timeStart} = this.state
    if (!timeStart) {
    this.setState({
      sessionLength: sessionLength > 1 ? sessionLength - 1 : 1
    }, () => {
      this.setState({timeRemain: this.state.sessionLength * 60})
    })
  }
  }

  sessionIncrement = () => {
    const { sessionLength, timeStart} = this.state
    if (!timeStart) {
    this.setState({
      sessionLength: sessionLength + 1
    }, () => {
      this.setState({ timeRemain: this.state.sessionLength * 60 })
    })
  }
  }

  handleTime = () => {
    const {timeStart, sessionLength} = this.state
    this.setState({timeStart: !timeStart})
    if (!timeStart) {
      this.timer = setInterval(() => {
        this.setState({
          timeRemain: this.state.timeRemain - 1
        })
        if (this.state.timeRemain === 0) {
          if (this.state.breakLength > 1) {
            this.setState({
              breakLength: this.state.breakLength -1,
              timeRemain: sessionLength * 60
            })
          }else {
            clearInterval(this.timer)
            this.setState({timeStart: false})
          }
        }
      }, 1000)
    } else {
      clearInterval(this.timer)
      this.setState({
        timeStart: !timeStart
      })
    }
  }

  reset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeRemain: 1500,
      timeStart: false
    })
    clearInterval(this.timer)
  }

  render() {
    const {breakLength, sessionLength, timeRemain} = this.state
    return (
      <div className="App">
        <header>Pomodoro Clock</header>

        <div className="set">
          <section className="control">
            <div id="break-label">Break Length</div>
            <div>
              <div
                id="break-incremnt"
                className="arrow span"
                onClick={this.breakIncrement}
              >
                &uarr;
              </div>
              <div id="break-length" className="span">
                {breakLength}
              </div>
              <div
                id="break-decrement"
                className="arrow span"
                onClick={this.breakDecrement}
              >
                &darr;
              </div>
            </div>
          </section>
          <section className="control">
            <div id="session-label">Session Length</div>
            <div>
              <div
                id="session-incremnt"
                className="arrow span"
                onClick={this.sessionIncrement}
              >
                &uarr;
              </div>
              <div id="session-length" className="span">
                {sessionLength}
              </div>
              <div
                id="session-decrement"
                className="arrow span"
                onClick={this.sessionDecrement}
              >
                &darr;
              </div>
            </div>
          </section>
        </div>

        <div className="timer">
          <div id="timer-label">Session</div>
          <div id="time-left">{this.formatTime(timeRemain)}</div>
        </div>

        <div className="set2">
          <div className="arrow span" id="start_stop" onClick={this.handleTime}>
            &#8677;
          </div>
          <div className="arrow span" id="reset" onClick={this.reset}>
            &#8634;
          </div>
        </div>
      </div>
    )
  }
}

export default App
