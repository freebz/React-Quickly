// 예페 코드 7.5  폼 요소 렌더링하기

constructor(props) {
  super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    ...
}
handleFirstNameChange(event) {
  this.setState({firstName: event.target.value})
}
...
handleSubmit() {
  fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)})
    .then((response)=>{return response.json()})
    .then((data)=>{console.log('Submitted: ', data)})
}
render() {
  return <form>
    <input name="firstName"
      onChange={this.handleFirstNameChange}
      type="text"/>
        ...
    <input
      type="button"
      onClick={this.handleSubmit}
      value="Submit"/>
  </form>
}