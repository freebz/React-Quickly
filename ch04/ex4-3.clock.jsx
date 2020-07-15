// 예제 코드 4.3  상태를 이용한 Clock 컴포넌트 구현

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
      currentTime: (new Date()).toLocaleString('en')
    }
  }
  launchClock() {
    setInterval(() => {
      console.log('Updating time...')
      this.setState({
        currentTime: (new Date()).toLocaleString('en')
      })
    }, 1000)
  }
  render() {
    console.log('Rendering Clock...')
    return <div>{this.state.currentTime}</div>
  }
}