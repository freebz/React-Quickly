// 예제 코드 19.11  PasswordVisibility 컴포넌트

const React = require('react')
class PasswordVisibility extends React.Component {
  render() {
    return (
      <label className="form-control">
        <input className=""
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}/> Show password
      </label>
    )
  }
}
module.exports = PasswordVisibility