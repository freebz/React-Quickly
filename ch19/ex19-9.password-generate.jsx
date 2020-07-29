// 예제 코드 19.9  PasswordGenerate 컴포넌트

const React = require('react')
class PasswordGenerate extends React.Component{
  render() {
    return (
      <button {...this.props} className="btn generate-btn">{this.props.children}</button>
    )
  }
}
module.exports = PasswordGenerate