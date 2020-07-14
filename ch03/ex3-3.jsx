// 예제 코드 3.3  JSX를 이용해서 생성한 HelloWorld 클래스

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>1. Hello world!</h1>
        <h1>2. Hello world!</h1>
      </div>
    )
  }
}
ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('content')
)