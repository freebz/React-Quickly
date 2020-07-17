// 예제 코드 6.7  상태비저장 버튼 컴포넌트

class ClickCounterButton extends React.Component {
  render() {
    return <button
      onClick={this.props.handler}
      className="btn btn-danger">
      Increase Volumn (Current volumn is {this.props.counter})
    </button>
  }
}