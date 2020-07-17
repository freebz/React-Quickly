// 예제 코드 7.3  폼 요소 렌더링

...
constructor(props) {
  super(props)
  this.state = {selectedValue: 'node'}
}
handleSelectChange(event) {
  this.setState({selectedValue: event.target.value})
}
...
render() {
  return <form>
    <select
      value={this.state.selectedValue}
      onChange={this.handleSelectChange}>
        <option value="ruby">Ruby</option>
        <option value="node">Node</option>
        <option value="python">Python</option>
    </select>
  </form>
}
...