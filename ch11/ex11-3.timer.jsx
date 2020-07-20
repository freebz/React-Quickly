// 예제 코드 11.3  timer.jsx의 골격

class TimerWrapper extends React.Component {
  constructor(props) {
    // ...
  }
  startTimer(timeLeft) {
    // ...
  }
  render() {
    // ...
  }
}

class Timer extends React.Component {
  render() {
    // ...
  }
}

class Button extends React.Component {
  startTimer(event) {
    // ...
  }
  render() {
    // ...
  }
}

ReactDOM.render(
  <TimerWrapper/>,
  document.getElementById('timer-app')
)