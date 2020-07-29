// 예제 코드 20.6  주 클라이언트 스크립트

const React = require('react')
const ReactDOM = require('react-dom')

const Autocomplete = require('./autocomplete.jsx')
const {rooms, url} = window.__autocomplete_data

ReactDOM.render(<Autocomplete
    options={rooms}
    url={url}/>,
  document.getElementById('autocomplete')
)