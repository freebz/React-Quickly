// 예제 코드 10.3  Tooltip 컴포넌트와 텍스트

class Tooltip extends React.Component {
  constructor(props) {
    ...
  }
  toggle() {
    ...
  }
  render() {
    ...
  }
}

ReactDOM.render(<div>
  <Tooltip text="The book you're reading now">React Quickly</Tooltip> was published in 2017. It's awesome!
  </div>,
  document.getElementById('tooltip'))