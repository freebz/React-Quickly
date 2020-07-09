// 예제 코드 2.4  render() 메서드에서 frameworkName 속성 사용하기

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello ' + this.props.frameworkName + ' world!!!'
    )
  }
}