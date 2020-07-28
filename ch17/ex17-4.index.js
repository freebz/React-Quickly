// 예제 코드 17.4  Express에서 React를 사용하여 페이지에 HTML을 보여준다.

const express = require('express')
const app = express()
const http = require('http')

const ReactDOMServer = require('react-dom/server')
const React = require('react')
const About = React.createFactory(require('./components/about.js'))

app.get('/about', (req, res, next) => {
  const aboutHTML = ReactDOMServer.renderToStaticMarkup(About())
  response.send(aboutHTML)
})

http.createServer(app)
  .listen(3000)