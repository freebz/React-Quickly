// 예제 코드 6.9  Content에서 전달한 이벤트 핸들러를 사용하는 버튼 컴포넌트

class ClickCounterButton extends React.Component {
  render() {
    return <button
      onClick={this.props.handler}
      className="btn btn-info">
      Don't touch me with your dirty hands!
    </button>
  }
}