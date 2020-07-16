// 예제 코드 5.2  컴포넌트 라이프사이클 이벤트 관찰

class Logger extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
  }
  componentWillMount() {
    console.log('componentWillMount 실행')
  }
  componentDidMount(e) {
    console.log('componentDidMount 실행')
    console.log('DOM node: ', ReactDOM.findDOMNode(this))
  }
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps 실행')
    console.log('새로운 속성: ', newProps)
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate 실행')
    console.log('새로운 속성: ', newProps)
    console.log('새로운 상태: ', newState)
    return true
  }
  componentWillUpdate(newProps, newState) {
    console.log('componentWillUpdate 실행')
    console.log('새로운 속성: ', newProps)
    console.log('새로운 상태: ', newState)
  }
  componentDidUpdate(oldProps, oldState) {
    console.log('componentDidUpdate 실행')
    console.log('이전 속성: ', oldProps)
    console.log('이전 상태: ', oldState)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
      // console.log('rendering... Display')
      return (
        <div>{this.props.time}</div>
      )
  }
}