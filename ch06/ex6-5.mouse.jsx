// 예제 코드 6.5  합성 이벤트는 이벤트 핸들러 실행 후 null이 된다.

class Mouse extends React.Component {
  handleMouseOver(event) {
    console.log('mouse is over with event')
    window.e = event // 안티패턴
    console.dir(event.target)
    setTimeout(() => {
      console.table(event.target)
      console.table(window.e.target)
    }, 2345)
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