// 예제 코드 14.4  React Router를 이용한 URL 라우팅 정의하기

const React = require('react')
const {
  Router,
  Route,
  IndexRoute,
  browserHistory
} = require('react-router')
const App = require('components/app/app.js')
const Movies = require('components/movies/movies.js')
const Movie = require('components/movie/movie.js')

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Movies} />
      <Route path="movies" component={Movies}>
        <Route path=":id" component={Movie} />
      </Route>
    </Route>
  </Router>
)