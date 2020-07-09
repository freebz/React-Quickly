// 예제 코드 2.1  <h1> 엘리먼트 두 개를 자식으로 가진 <div> 엘리먼트 생성

let h1 = React.createElement('h1', null, 'Hello world!')
ReactDOM.render(
  React.createElement('div', null, h1, h1),
  document.getElementById('content')
)