// 예제 코드 19.7  Password 컴포넌트 구현하기

const React = require('react')
const ReactDOM = require('react-dom')
const generatePassword = require('../js/generate-password.js')
const rules = require('../js/rules.js')
const PasswordGenerate = require('./password-generate.jsx')
const PasswordInfo = require('./password-info.jsx')
const PasswordInput = require('./password-input.jsx')
const PasswordVisibility = require('./password-visibility.jsx')

class Password extends React.Component {
  constructor(props) {
    super(props)
    this.state = {strength: {}, password: '', visible: false, ok: false}
    this.generate = this.generate.bind(this)
    this.checkStrength = this.checkStrength.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
  ... 
}