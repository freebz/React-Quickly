// 예제 코드 2.5  HelloWorld 컴포넌트의 모든 속성을 <h1>으로 전달하는 경우

class HelloWorld extends React.Component {
    render() {
      return React.createElement(
        'h1',
        this.props,
        'Hello ' + this.props.frameworkName + ' world!!!'
      )
    }
  }