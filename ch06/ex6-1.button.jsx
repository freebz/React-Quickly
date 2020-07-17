// 예제 코드 6.1  이벤트 핸들러를 클래스 메서드로 정의

class SaveButton extends React.Component {
  handleSave(event) {
    console.log(this, event)
  }
  render() {
    return <button onClick={this.handleSave.bind(this)}>
      Save
    </button>
  }
}