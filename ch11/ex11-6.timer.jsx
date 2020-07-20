// 예제 코드 11.6  카운트다운을 실행시키는 Button 컴포넌트

class Button extends React.Component {
  startTimer(event) {
    return this.props.startTimer(this.props.time)
  }
  render() {
    return <button type="button" className="btn-default btn"
      onClick={this.startTimer.bind(this)}>
        {this.props.time} seconds
    </button>
  }
}