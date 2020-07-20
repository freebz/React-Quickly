// 예제 코드 10.5  Tooltip 컴포넌트의 render() 메서드 전체

render() {
  const style = {
    zIndex: (this.state.opacity) ? 1000 : -1000,
    opacity: +this.state.opacity,
    top: (this.state.top || 0) + 20,
    left: (this.state.left || 0) - 30
  }
  return (
    <div style={{display: 'inline'}}>
      <span style={{color: 'blue'}}
        onMouseEnter={this.toggle}
        onMouseOut={this.toggle}>
          {this.props.children}
      </span>
      <div className="tooltip bottom" style={style} role="tooltip">
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">
          {this.props.text}
        </div>
      </div>
    </div>
  )
}