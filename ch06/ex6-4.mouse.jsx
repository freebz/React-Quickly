// 예제 코드 6.4  이벤트 핸들러를 클래스 메서드로 작성하고 render()에서 바인딩한다.

class Mouse extends React.Component {
  handleMouseOver(event) {
    console.log('mouse is over with event')
    console.dir(event.target)
  }
  render() {
    return <div>
      <div
        style={{border: '1px solid red'}}
        onMouseOver={this.handleMouseOver.bind(this)}>
          Open DevTools and move your mouse cursor over here
      </div>
    </div>
  }
}