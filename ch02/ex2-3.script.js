// 예제 코드 2.3  React 컴포넌트 클래스 생성하고 렌더링하기

let h1 = React.createElement('h1', null, 'Hello world!')
class HelloWorld extends React.Component {
  render() {
    return React.createElement('div', null, h1, h1)
  }
}
ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('content')
)