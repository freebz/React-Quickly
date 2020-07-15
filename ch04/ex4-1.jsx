// 예제 코드 4.1  JSX에서 상태 랜더링하기

class Clock extends React.Component {
  render() {
    return <div>{this.state.currentTime}</div>
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
)