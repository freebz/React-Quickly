// 예제 코드 6.3  합성 이벤트를 받는 이벤트 핸들러

class Mouse extends React.Component {
  render() {
    return <div>
      <div
        style={{border: '1px solid red'}}
        onMouseOver={((event) => {
          console.log('mouse is over with event')
          console.dir(event)})}>
          Open DevTools and move your mouse cursor over here
      </div>
    </div>
  }
}