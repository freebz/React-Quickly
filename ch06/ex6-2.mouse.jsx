// 예제 코드 6.2  캡처 이벤트에 이어지는 버블링 이벤트

class Mouse extends React.Component {
  render() {
    return <div>
      <div
        style={{border: '1px solid red'}}
        onMouseOverCapture={((event) => {
          console.log('mouse over on capture event')
          console.dir(event, this)}).bind(this)}
        onMouseOver={((event) => {
          console.log('mouse over on bubbling event')
          console.dir(event, this)}).bind(this)}>
          Open DevTools and move your mouse cursor over here
      </div>
    </div>
  }
}