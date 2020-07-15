// 예제 코드 4.4  상태비저장 Hello World

class HelloWorld extends React.Component {
  render() {
    return <h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>
  }
}