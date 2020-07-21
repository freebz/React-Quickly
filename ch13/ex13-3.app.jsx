// 예제 코드 13.3  경로 맵핑(app.jsx)

const React = require('react')
const ReactDOM = require('react-dom')
const Router = require('./router.jsx')
const mapping = {
  '#profile': <div>Profile (<a href="#">home</a>)</div>,
  '#accounts': <div>Accounts (<a href="#">home</a>)</div>,
  '*': <div>Dashboard<br/>
    <a href="#profile">Profile</a>
    <br/>
    <a href="#accounts">Accounts</a>
  </div>
}

ReactDOM.render(
  <Router mapping={mapping}/>,
  document.getElementById('content')
)