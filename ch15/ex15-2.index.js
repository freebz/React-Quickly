// 예제 코드 15.2  데이터와 정적 자원을 제공하기 위한 Express 서버

const path = require('path')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const {
  PORT = 3000,
  PWD = __dirname
} = process.env
const app = express()

app.use('/q', graphqlHTTP(req => ({
  schema,
  context: req.session
})))

app.use('/dist', express.static(path.resolve(PWD, 'build', 'public')))

app.use('*', (req, res) => {
  res.sendFile('index.html', {
    root: PWD
  })
})

app.listen(PORT, () =>
 console.log(`Running server on port ${PORT}`))