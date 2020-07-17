// 예제 코드 6.14  슬라이더 버튼 렌더링

...
  render() {
    return <div>
      <button disabled={(this.state.sliderValue<1)?true:false}
        className="btn default-btn"
        onClick={this.handleChange(-1)}>
          1 Less ({this.state.sliderValue-1})
      </button>
      <button disabled={(this.state.sliderValue>99) ? true : false}
        className="btn default-btn"
        onClick={this.handleChange(1)}>
          1 More ({this.state.sliderValue+1})
      </button>
    </div>
  }