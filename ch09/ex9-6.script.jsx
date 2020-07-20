// 예제 코드 9.6  JSX로 작성한 Link 컴포넌트

class Link extends React.Component {
  render() {
    const url='/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return <div>
      <a href={url}>
        {this.props.label}
      </a>
      <br/>
    </div>
  }
}