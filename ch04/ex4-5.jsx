// 예제 코드 4-5.  자식 엘리먼트에 상태 전달하기

...
  render() {
    console.log('Rendering...')
    return <div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay time={this.state.currentTime}/>
    </div>
  }