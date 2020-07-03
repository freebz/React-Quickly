// 예제 코드 1.2  h1 태그 렌더링하기

var h1 = React.createElement('h1', null, 'Hello world!')
ReactDOM.render(
  h1,
  document.getElementById('content')
)