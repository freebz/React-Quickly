// 예제 코드 14.5  리듀서 결합하기

const { combineReducers } = require('redux')
const {
  reducer: movies
} = require('./movies')

module.exports = combineReducers({
  movies
  // 리듀서를 더 추가할 수 있다.
})