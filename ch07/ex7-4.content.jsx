// 예제 코드 7.4  폼 요소의 렌더링과 변경 감지하기

handleChange(event) {
  console.log(event.target.value)
}
render() {
  return <input
    type="text"
    onChange={this.handleChange}
    defaultValue="hi@azat.co"/>
}