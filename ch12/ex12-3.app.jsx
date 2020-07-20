// 예제 코드 12.3  app.jsx 리팩토링

require('../css/main.css')

const React = require('react')
const ReactDOM = require('react-dom')
const Content = require('./content.jsx')

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)