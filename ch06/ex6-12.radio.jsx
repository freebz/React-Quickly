// 예제 코드 6.12  상태 값을 스타일에 이용해서 엘리먼트 크기 변경하기

...
  render() {
    return <div>
      <div className="radio-tagger" style={this.state.taggerStyle}>
        <input type="radio" name={this.props.name} id={this.props.id} />
        <label htmlFor={this.props.id}>
          <div className="radio-text" style={this.state.textStyle}> {this.props.label}</div>
          <div className="radio-outer" style={this.state.outerStyle}>
            <div className="radio-inner" style={this.state.innerStyle}>
              <div className="radio-selected" style={this.state.selectedStyle} />
            </div>
          </div>
        </label>
      </div>
    </div>
  }
}